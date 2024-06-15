# Stage 1: Build
FROM maven:3-amazoncorretto-17-al2023 AS builder

COPY . /ms-discovery
WORKDIR /ms-discovery

# Run Maven build and check if the JAR file is created
RUN mvn clean package -DskipTests && \
    if [ -f target/ms-discovery.jar ]; then echo "JAR file exists"; else echo "JAR file does not exist" && exit 1; fi


# Stage 2: Run
FROM amazoncorretto:17-alpine

ARG PORT
ARG LOCAL_HOST

ENV PORT=${PORT}
ENV LOCAL_HOST=${LOCAL_HOST}

WORKDIR /opt/dh-infra

COPY --from=builder /ms-discovery/target/ms-discovery.jar .

EXPOSE $PORT

ENTRYPOINT ["java", "-jar", "/opt/dh-infra/ms-discovery.jar"]
