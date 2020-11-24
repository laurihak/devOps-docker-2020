FROM ubuntu:16.04
WORKDIR /app
RUN apt-get update && apt-get install -y curl && \
apt-get update && apt-get install -y git && \
curl -sL https://deb.nodesource.com/setup_10.x | bash && apt install -y nodejs && \
node -v && npm -v && \
git clone https://github.com/docker-hy/frontend-example-docker.git && \
apt-get purge -y --auto-remove curl && \
apt-get purge -y --auto-remove git && \
rm -rf /var/lib/apt/lists/*
CMD cd frontend-example-docker && npm install && npm start
