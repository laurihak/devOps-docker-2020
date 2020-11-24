BEFORE:


FROM ubuntu:18.04

WORKDIR /app
COPY . .

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash && apt install -y nodejs && \
node -v && npm -v
RUN npm install && npm run build && \
npm install -g serve

CMD serve -s build

## command: docker run -p 5000:5000 <insert-image-name>




AFTER:

FROM alpine:3.10 as build-stage

WORKDIR /app
COPY . .

RUN apk add --update nodejs npm && \
chmod a+rwx /app && \
chmod a+rwx /usr/lib && \
adduser -D node && \
chown -R node /app

RUN npm install && npm run build && \
npm install -g serve

USER node

CMD serve -s build

FROM nginx:1.18-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build .


ENTRYPOINT ["nginx", "-g", "daemon off;"]
## docker run -p 5000:80

