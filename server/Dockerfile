FROM maven:3.8-openjdk-17 AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app
RUN mvn clean install

FROM ibm-semeru-runtimes:open-17-jre-centos7

COPY --from=build /app/target/megasena-server-docker.jar /app/app.jar

WORKDIR /app

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]

