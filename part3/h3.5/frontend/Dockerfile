FROM node:lts-alpine3.10

WORKDIR /app

COPY /frontend-example-docker .
RUN node -v && npm -v && \
chmod a+x /app && \
chown -R node /app

USER node

CMD npm install && npm start
