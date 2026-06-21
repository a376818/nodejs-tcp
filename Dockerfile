FROM python:3.14.0

ENV TZ=America/Mexico_City

RUN apt-get update && \
    apt-get install -y git tzdata

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN git clone https://github.com/a376818/nodejs-tcp.git .

CMD [ "npm", "start" ]