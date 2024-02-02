# syntax=docker/dockerfile:1

FROM node:21-alpine3.18
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 5174
CMD ["ng", "serve", "--port", "5174", "--host", "0.0.0.0"]