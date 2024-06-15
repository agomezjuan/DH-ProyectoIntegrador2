# Stage 1: Build
FROM maven:3-amazoncorretto-17-al2023 as builder

COPY . /ms-pi2

WORKDIR /ms-pi2

RUN mvn clean package -DskipTests

# Stage 2: Run
FROM amazoncorretto:17-alpine-jdk

ARG PORT
ARG LOCAL_HOST
ARG MYSQL_ID
ARG MYSQL_PASSWORD

ENV PORT=${PORT}
ENV LOCAL_HOST=${LOCAL_HOST}
ENV MYSQL_ID=${MYSQL_ID}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}

EXPOSE $PORT

WORKDIR /opt/dh-infra/

COPY --from=builder ms-pi2/target/ms-pi2.jar .

ENTRYPOINT java -jar /opt/dh-infra/ms-pi2.jar