lauri@LH-PC:~/Desktop/Dockerfile/h1.6$ docker build . -t docker-clock
Sending build context to Docker daemon   2.56kB
Step 1/2 : FROM devopsdockeruh/overwrite_cmd_exercise
 ---> 3d2b622b1849
Step 2/2 : CMD ["-c"]
 ---> Running in fc35c048a0d5
Removing intermediate container fc35c048a0d5
 ---> c34156cc7009
Successfully built c34156cc7009
Successfully tagged docker-clock:latest
lauri@LH-PC:~/Desktop/Dockerfile/h1.6$ docker run docker-clock
1
2
3
4
5
6
7
