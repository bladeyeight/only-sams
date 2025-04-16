#!/bin/sh
set -e

echo "Starting entrypoint script..."

# Create a temporary nginx config that doesn't use SSL
cat > /tmp/nginx-temp.conf << 'EOF'
server {
    listen 80;
    server_name only-sams.net www.only-sams.net;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 404;
    }
}
EOF

# Create directory for certbot challenges
mkdir -p /var/www/certbot

# Start nginx with temporary config for certbot validation
echo "Starting nginx with temporary config for certbot..."
cp /tmp/nginx-temp.conf /etc/nginx/http.d/default.conf
nginx

# Run certbot to obtain/renew certificates
echo "Running certbot..."
certbot certonly --webroot --webroot-path=/var/www/certbot --non-interactive --agree-tos --email samueljperry1991@gmail.com -d only-sams.net -d www.only-sams.net || true

# Stop nginx after certbot is done
echo "Stopping nginx..."
nginx -s stop

# Check if certificates were obtained
if [ -d "/etc/letsencrypt/live/only-sams.net" ]; then
    echo "Certificates obtained successfully. Using HTTPS config."
    # Use the real nginx config with SSL
    cp /etc/nginx/http.d/default.conf.original /etc/nginx/http.d/default.conf
else
    echo "Failed to obtain certificates. Creating fallback HTTP-only config."
    # Create a fallback config that works without SSL
    cat > /etc/nginx/http.d/default.conf << 'EOF'
server {
    listen 80;
    server_name only-sams.net www.only-sams.net;

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
fi

# Start supervisord (which starts nginx and node)
echo "Starting supervisord..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
