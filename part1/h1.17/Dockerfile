FROM ubuntu:20.04

WORKDIR /app
RUN apt-get update && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | apt-get install -y nodejs
RUN apt-get install npm -y && npm i -g npx
RUN node -v && npm -v && npx -v

