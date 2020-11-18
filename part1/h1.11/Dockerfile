FROM ubuntu:18.04
WORKDIR /app
EXPOSE 8000
COPY backend-example-docker backend-example-docker
RUN apt-get update && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash && apt-get install -y nodejs
RUN node -v && npm -v
CMD cd backend-example-docker && npm install && npm start
