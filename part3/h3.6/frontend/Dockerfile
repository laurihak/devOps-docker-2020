FROM node:lts-alpine3.10 as build-stage

WORKDIR /app

COPY /frontend-example-docker .
RUN node -v && npm -v && \
chmod a+x /app && \
chown -R node /app

RUN npm install && npm run build
USER node

FROM nginx:1.18
EXPOSE 5000
COPY --from=build-stage /app/dist /usr/share/nginx/html

## command to run: docker run -p 80:80 <input image here>
