FROM node:12.18.0-alpine3.12
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app
CMD ["npm", "start"]