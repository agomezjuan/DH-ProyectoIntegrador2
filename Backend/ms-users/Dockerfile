# Stage 1: Build
FROM maven:3-amazoncorretto-17-al2023 as builder

COPY . /ms-users

WORKDIR /ms-users

RUN mvn clean package -DskipTests

# Stage 2: Run
FROM amazoncorretto:17-alpine-jdk

ARG PORT
ARG EUREKA_ID
ARG KEYCLOAK_HOST
ARG USERS_CLIENT_SECRET

ENV PORT=${PORT}
ENV EUREKA_ID=${EUREKA_ID}
ENV KEYCLOAK_HOST=${KEYCLOAK_HOST}
ENV CLIENT_SECRET=${USERS_CLIENT_SECRET}

EXPOSE $PORT

WORKDIR /opt/dh-infra

COPY --from=builder ms-users/target/ms-users.jar .

ENTRYPOINT java -jar /opt/dh-infra/ms-users.jar