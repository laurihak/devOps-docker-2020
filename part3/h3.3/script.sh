echo input github repository https:
read gitrepo
## git clone https://github.com/laurihak/docker-react.git
echo input your username at docker:
read dock_user
echo input your repository at docker:
read dock_repo
git clone $gitrepo
touch Dockerfile
printf "FROM docker\n
WORKDIR /app\n
COPY . .\n
CMD docker login && docker push $dock_user/$dock_repo" > Dockerfile
chmod +x Dockerfile
docker build . -t $dock_user/$dock_repo 
docker run -it -v /var/run/docker.sock:/var/run/docker.sock $dock_user/$dock_repo 
