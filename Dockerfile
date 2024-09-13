# Use the official Node.js image as a base image
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Command to run the app
CMD ["node", "src/app.js"]