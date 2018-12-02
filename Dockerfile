FROM node:lts-alpine

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

# Docker layer with only the dependencies
COPY package*.json ./
RUN npm ci --production && rm -fr ../.npm

# Next layer will hold all the source code
COPY . .

ENV NODE_ENV=production
