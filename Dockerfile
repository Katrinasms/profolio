FROM node:22.11-bullseye-slim

WORKDIR /profolio
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm start