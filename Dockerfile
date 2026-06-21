FROM node:24.11.1

WORKDIR /app

COPY package*.json ./

RUN git clone https://github.com/a376818/nodejs-tcp.git .

RUN npm install

ENV PORT=4000

EXPOSE 4000

CMD [ "npm", "start" ]