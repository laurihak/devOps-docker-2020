FROM ubuntu:18.04
WORKDIR /app
RUN apt-get update && apt-get install -y curl
RUN apt-get update && apt-get install -y git
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash && apt install -y nodejs
RUN node -v && npm -v
RUN git clone https://github.com/docker-hy/frontend-example-docker.git
CMD cd frontend-example-docker && npm install && npm start
