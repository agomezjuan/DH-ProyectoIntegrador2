# Stage 1: Build
FROM maven:3-amazoncorretto-17-al2023 as builder

COPY . /ms-gateway

WORKDIR /ms-gateway

RUN mvn clean package -DskipTests

# Stage 2: Run
FROM amazoncorretto:17-alpine-jdk

ARG PORT
ARG LOCAL_HOST
ARG KEYCLOAK_HOST
ARG GATEWAY_CLIENT_SECRET

ENV PORT=${PORT}
ENV LOCAL_HOST=${LOCAL_HOST}
ENV KEYCLOAK_HOST=${KEYCLOAK_HOST}
ENV CLIENT_SECRET=${GATEWAY_CLIENT_SECRET}

EXPOSE $PORT

WORKDIR /opt/dh-infra

COPY --from=builder ms-gateway/target/ms-gateway.jar .

ENTRYPOINT java -jar /opt/dh-infra/ms-gateway.jar