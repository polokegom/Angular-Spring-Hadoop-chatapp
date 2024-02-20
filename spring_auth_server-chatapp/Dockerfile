FROM adoptopenjdk/openjdk17:alpine-jre
WORKDIR /computerauthserver
COPY authserver/target/authserver.jar /computerauthserver/autherserver.jar
EXPOSE 8080
CMD ["java", "-jar", "/computerauthserver/authserver.jar"]