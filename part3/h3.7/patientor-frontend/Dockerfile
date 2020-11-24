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
## command: docker run -p 5000:80

