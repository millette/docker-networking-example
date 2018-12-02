FROM node:lts-alpine

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci --production && rm -fr ../.npm

COPY . .

ENV NODE_ENV=production
