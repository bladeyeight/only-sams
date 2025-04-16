FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# No need to copy files as we'll use volumes for development

EXPOSE 5000

CMD ["npm", "run", "dev"]
