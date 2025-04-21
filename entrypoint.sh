#!/bin/sh
set -e

echo "Starting entrypoint script..."

# Create directory for certbot challenges
mkdir -p /var/www/certbot

# Create initial nginx config for certbot validation
cat > /etc/nginx/http.d/default.conf << 'EOF'
server {
    listen 80;
    server_name only-sams.net www.only-sams.net;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Start nginx for certbot validation
echo "Starting nginx for certbot validation..."
nginx

# Give nginx a moment to start
sleep 5

# Try to obtain certificates
echo "Attempting to obtain SSL certificates..."
certbot certonly --webroot --webroot-path=/var/www/certbot \
  --non-interactive --agree-tos \
  --email samueljperry1991@gmail.com \
  -d only-sams.net -d www.only-sams.net || true

# Check if certificates were obtained
if [ -d "/etc/letsencrypt/live/only-sams.net" ]; then
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

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
    # Reload nginx to apply new config
    nginx -s reload
    echo "HTTPS configuration applied successfully."
else
    echo "No SSL certificates found. Continuing with HTTP-only config."
fi

# Set up automatic renewal
echo "0 12 * * * certbot renew --quiet --webroot --webroot-path=/var/www/certbot && nginx -s reload" > /etc/crontabs/root
crond

# Start supervisord (which starts node.js backend)
echo "Starting supervisord..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
