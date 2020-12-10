# image-fun

A small puzzle game to find out words based on presented images.

## Building and running

There is a [live demo](https://compose-us-research.github.io/image-fun/) of this
game on GitHub pages.

There is a `docker-compose.yml` file which opens port 3000 for the development
server. You can use 
[docker-box](https://github.com/compose-us-research/docker-box) to run and
develop the app in a Docker container/environment (or use 
`docker-compose run --service-ports --rm app bash` directly).

## Available commands

Don't forget to run `npm ci` first, to get all necessary packages in order to
run the following commands.

- `npm run start` - Start a development server
- `npm run build` - Build a static version of the files
- `npm run cypress:open` - Open [cypress](https://www.cypress.io/) for tests
- `npm run deploy` - Deploy newest build on `gh-pages` branch
- `npm run test` - Run all tests
