FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Add --legacy-peer-deps flag to handle potential dependency conflicts
RUN npm install --legacy-peer-deps

# No need to copy files as we'll use volumes for development

EXPOSE 3000

CMD ["npm", "start"]
