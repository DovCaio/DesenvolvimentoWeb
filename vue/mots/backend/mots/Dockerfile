FROM eclipse-temurin:22-jdk AS build

WORKDIR /app

COPY --chown=gradle:gradle . .

RUN chmod +x ./gradlew

RUN ./gradlew build --no-daemon

FROM eclipse-temurin:22-jdk

WORKDIR /app

COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
