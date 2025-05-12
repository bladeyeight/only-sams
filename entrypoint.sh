#!/bin/sh
set -e

echo "Starting entrypoint script..."

# Create directory for certbot challenges
mkdir -p /var/www/certbot
chmod -R 755 /var/www/certbot

# Debug: List contents of certificate directories
echo "Checking for existing certificates..."
ls -la /etc/letsencrypt/ || echo "Directory /etc/letsencrypt/ not found or empty"
ls -la /etc/letsencrypt/live/ 2>/dev/null || echo "Directory /etc/letsencrypt/live/ not found or empty"
ls -la /etc/letsencrypt/live/only-sams.net/ 2>/dev/null || echo "Directory /etc/letsencrypt/live/only-sams.net/ not found or empty"

# Remove any test files that might interfere with certbot - BE VERY AGGRESSIVE
echo "AGGRESSIVELY removing any test files that might interfere with certbot..."
echo "Trying standard rm command..."
rm -f /etc/letsencrypt/test_root.txt
echo "Trying rm with sudo..."
sudo rm -f /etc/letsencrypt/test_root.txt 2>/dev/null || true
echo "Trying to overwrite the file..."
echo "" > /etc/letsencrypt/test_root.txt 2>/dev/null || true
echo "Trying to change permissions and then remove..."
chmod 777 /etc/letsencrypt/test_root.txt 2>/dev/null || true
rm -f /etc/letsencrypt/test_root.txt 2>/dev/null || true

# Verify test files were removed
echo "Verifying test files were removed..."
if [ -f "/etc/letsencrypt/test_root.txt" ]; then
    echo "WARNING: Failed to remove test_root.txt despite multiple attempts!"
    echo "File permissions:"
    ls -la /etc/letsencrypt/test_root.txt
    echo "File contents:"
    cat /etc/letsencrypt/test_root.txt
else
    echo "SUCCESS: test_root.txt was successfully removed!"
fi

# Check for actual certificate files - if they exist, use them
if [ -f "/etc/letsencrypt/live/only-sams.net/fullchain.pem" ] && [ -f "/etc/letsencrypt/live/only-sams.net/privkey.pem" ]; then
    echo "Found existing certificates in mounted volume. Using these for HTTPS."
    # Copy certificates to the /certs directory
    mkdir -p /certs
    cp /etc/letsencrypt/live/only-sams.net/fullchain.pem /certs/
    cp /etc/letsencrypt/live/only-sams.net/privkey.pem /certs/
    chmod 644 /certs/fullchain.pem
    chmod 644 /certs/privkey.pem
    
    # Create HTTPS nginx config
    cat > /etc/nginx/http.d/default.conf << 'EOF'
server {
    listen 80;
    server_name only-sams.net www.only-sams.net;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name only-sams.net www.only-sams.net;

    ssl_certificate /certs/fullchain.pem;
    ssl_certificate_key /certs/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /reviews/ {
        proxy_pass http://localhost:5000/reviews/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
    
    echo "HTTPS configuration applied successfully."
else
    echo "No valid certificates found. Cleaning up any incomplete certificate directories..."
    
    # Clean up any existing certificate directories to avoid conflicts
    echo "Removing any existing certificate directories..."
    rm -rf /etc/letsencrypt/live/only-sams.net 2>/dev/null || true
    rm -rf /etc/letsencrypt/archive/only-sams.net 2>/dev/null || true
    rm -f /etc/letsencrypt/renewal/only-sams.net.conf 2>/dev/null || true
    
    # Verify directories were removed
    echo "Verifying certificate directories were removed..."
    if [ -d "/etc/letsencrypt/live/only-sams.net" ]; then
        echo "WARNING: Failed to remove live/only-sams.net directory, trying again with sudo..."
        sudo rm -rf /etc/letsencrypt/live/only-sams.net 2>/dev/null || echo "ERROR: Could not remove live/only-sams.net directory even with sudo!"
    else
        echo "SUCCESS: live/only-sams.net directory was successfully removed or did not exist!"
    fi
    
    echo "Attempting to obtain new certificates..."
    # Create initial nginx config for certbot validation
    cat > /etc/nginx/http.d/default.conf << 'EOF'
server {
    listen 80;
    server_name only-sams.net www.only-sams.net;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri $uri/ =404;
    }
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /reviews/ {
        proxy_pass http://localhost:5000/reviews/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

    # Start nginx for certbot validation
    echo "Starting nginx for certbot validation..."
    nginx

    # Give nginx a moment to start
    sleep 5

    # Check if nginx is running properly
    echo "Checking if nginx is running..."
    ps aux | grep nginx
    netstat -tulpn | grep LISTEN

    # Try to obtain certificates with more verbose output
    echo "Attempting to obtain SSL certificates..."
    certbot certonly --webroot --webroot-path=/var/www/certbot \
      --non-interactive --agree-tos \
      --email samueljperry1991@gmail.com \
      -d only-sams.net -d www.only-sams.net \
      --verbose || true

    # Check the certbot logs
    echo "Checking certbot logs..."
    cat /var/log/letsencrypt/letsencrypt.log || echo "No certbot logs found"

    # List certificates directory after certbot run
    echo "Checking for certificates after certbot run..."
    ls -la /etc/letsencrypt/live/ 2>/dev/null || echo "Directory /etc/letsencrypt/live/ not found or empty"
    ls -la /etc/letsencrypt/live/only-sams.net/ 2>/dev/null || echo "Directory /etc/letsencrypt/live/only-sams.net/ not found or empty"

    # Stop nginx after certbot validation
    echo "Stopping nginx after certbot validation..."
    nginx -s stop || true
    sleep 2

    # Check again for certificate files
    if [ -f "/etc/letsencrypt/live/only-sams.net/fullchain.pem" ] && [ -f "/etc/letsencrypt/live/only-sams.net/privkey.pem" ]; then
        echo "Certificates obtained successfully. Using HTTPS config."
        # Copy certificates to the /certs directory
        mkdir -p /certs
        cp /etc/letsencrypt/live/only-sams.net/fullchain.pem /certs/
        cp /etc/letsencrypt/live/only-sams.net/privkey.pem /certs/
        chmod 644 /certs/fullchain.pem
        chmod 644 /certs/privkey.pem
        
        # Create HTTPS nginx config
        cat > /etc/nginx/http.d/default.conf << 'EOF'
server {
    listen 80;
    server_name only-sams.net www.only-sams.net;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name only-sams.net www.only-sams.net;

    ssl_certificate /certs/fullchain.pem;
    ssl_certificate_key /certs/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /reviews/ {
        proxy_pass http://localhost:5000/reviews/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
        # Ensure the certificate directory is properly saved to the mounted volume
        echo "Ensuring certificates are properly saved to mounted volume..."
        chmod -R 755 /etc/letsencrypt
    else
        echo "Failed to obtain SSL certificates. Continuing with HTTP-only config."
    fi
fi

# Check if test_root.txt is still present after all operations
echo "Final check for test files..."
if [ -f "/etc/letsencrypt/test_root.txt" ]; then
    echo "WARNING: test_root.txt is STILL present after all operations!"
    echo "File permissions:"
    ls -la /etc/letsencrypt/test_root.txt
    echo "File contents:"
    cat /etc/letsencrypt/test_root.txt
else
    echo "SUCCESS: test_root.txt is not present at the end of the script!"
fi

# Set up automatic renewal
echo "0 0,12 * * * certbot renew --quiet" > /etc/crontabs/root
crond

# Start supervisord (which starts node.js backend and nginx)
echo "Starting supervisord..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
