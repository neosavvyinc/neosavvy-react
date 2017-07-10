FROM node:8

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY . /usr/src/client

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
