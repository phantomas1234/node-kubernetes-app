FROM node
EXPOSE 8000
WORKDIR /app

ADD . /app

CMD node app.js