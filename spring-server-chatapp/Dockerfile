FROM adoptopenjdk/openjdk17:alpine-jre
WORKDIR /computerchatserver
COPY authserver/target/spring-server-chatapp.jar /computerchatserver/chatappserver.jar
EXPOSE 8080
CMD ["java", "-jar", "/computerchatserver/chatappserver.jar"]