FROM node:8
MAINTAINER Pablo Alonso <pablo@neosavvy.com>

RUN mkdir -p /usr/src/api
COPY . /usr/src/api
WORKDIR /usr/src/api

RUN yarn

EXPOSE 4000

CMD ["yarn", "start"]
