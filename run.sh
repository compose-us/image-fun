#!/usr/bin/env bash

set -e

DOCKERFILE_HASH=$(md5 -q <(echo $(md5 -q ./Dockerfile) $(md5 -q ./docker-compose.yml)))
CONTAINER_NAME=image-fun
IMAGE_NAME=${CONTAINER_NAME}:${DOCKERFILE_HASH}

if ! docker inspect ${IMAGE_NAME} > /dev/null; then
  echo "--- BUILDING image '${IMAGE_NAME}'---"
  IMAGE_TAG="${DOCKERFILE_HASH}" docker-compose build
fi

IMAGE_TAG="${DOCKERFILE_HASH}" docker-compose run --rm --service-ports "${CONTAINER_NAME}" $@
