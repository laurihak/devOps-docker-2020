FROM openjdk:8
RUN apt-get update && apt-get install git 
RUN git clone https://github.com/docker-hy/spring-example-project.git
RUN cd spring-example-project 
CMD cd spring-example-project && ./mvnw package && java -jar ./target/docker-example-1.1.3.jar
