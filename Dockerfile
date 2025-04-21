FROM node:16 as frontend-build
WORKDIR /app/frontend
COPY only-sams-frontend/package*.json ./
RUN npm install --legacy-peer-deps
COPY only-sams-frontend/ ./
RUN npm run build

FROM node:16 as backend-build
WORKDIR /app/backend
COPY only-sams-backend/package*.json ./
RUN npm install --legacy-peer-deps
COPY only-sams-backend/ ./
RUN npm run build

FROM node:16-alpine

# Install nginx, supervisord, and certbot for Let's Encrypt SSL
RUN apk add --no-cache nginx supervisor certbot

# Create necessary directories for supervisord
RUN mkdir -p /var/log/supervisor /var/run

# Install certbot for SSL
RUN apk add --no-cache certbot

# Create directory for certificates
RUN mkdir -p /certs

# Set up backend
WORKDIR /app/backend
COPY --from=backend-build /app/backend ./
ENV NODE_ENV=production
ENV MONGODB_URI="mongodb+srv://samueljperry1991:b_%25nH9m4xSfZJqB@only-sams-db.6wz2wrk.mongodb.net/gameReviews?retryWrites=true&w=majority&appName=only-sams-db"

# Set up frontend
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html

# Create directory for nginx config
RUN mkdir -p /etc/nginx/http.d

# Configure supervisord
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose ports
EXPOSE 80
EXPOSE 443

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]