lauri@LH-PC:~/Desktop/Dockerfile/h1.7$ docker run -it curler
root@38c3be35b8ad:/# ls -a
.   .dockerenv  boot  etc   lib    media  opt   root  sbin       srv  tmp  var
..  bin         dev   home  lib64  mnt    proc  run   script.sh  sys  usr
root@38c3be35b8ad:/# ./script.sh
bash: ./script.sh: Permission denied
root@38c3be35b8ad:/# chmod -x script.sh
root@38c3be35b8ad:/# ./script.sh
bash: ./script.sh: Permission denied
root@38c3be35b8ad:/# ./script   
bash: ./script: No such file or directory
root@38c3be35b8ad:/# chmod +x script.sh
root@38c3be35b8ad:/# ./script.sh
Input website:
helsinki.fi
Searching..
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="http://www.helsinki.fi/">here</a>.</p>
</body></html>
