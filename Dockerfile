FROM node:12-slim

RUN apt-get update -y && apt-get install -y git-all

USER node

WORKDIR /app

ENV PORT 3000
EXPOSE 3000
