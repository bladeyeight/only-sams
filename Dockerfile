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

# Set up backend
WORKDIR /app/backend
COPY --from=backend-build /app/backend ./
ENV NODE_ENV=production
ENV MONGODB_URI=mongodb+srv://samueljperry1991:b_%nH9m4xSfZJqB@only-sams-db.6wz2wrk.mongodb.net/gameReviews?retryWrites=true&w=majority&appName=only-sams-db

# Set up frontend
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html

# Configure nginx
COPY nginx.conf /etc/nginx/http.d/default.conf

# Configure supervisord
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80 443

# Start via entrypoint (runs certbot, then supervisord)
ENTRYPOINT ["/entrypoint.sh"]