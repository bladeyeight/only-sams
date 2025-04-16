#!/bin/sh
set -e

# Wait for nginx to be ready (in case of race conditions)
sleep 2

# Obtain/renew cert if needed (standalone mode, HTTP-01 challenge)
certbot certonly --standalone --non-interactive --agree-tos --email samueljperry1991@gmail.com -d only-sams.net -d www.only-sams.net || true

# Start supervisord (which starts nginx and node)
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
