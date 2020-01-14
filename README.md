# image-fun

A small puzzle game to find out words based on presented images.

## Building and running

There is a [live demo](https://compose-us-research.github.io/image-fun/) of this
game on GitHub pages.

To build and run it yourself, either use [Docker](https://www.docker.com/) and
the `run.sh` script or use `node` / `npm` directly. If you do not have Node
installed, prepend all `node` or `npm` commands with `./run.sh` while inside
this directory. It will use Docker to build and run all necessary commands.

## Available commands

Don't forget to run `npm ci` first, to get all necessary packages in order to
run the following commands.

- `npm run start` - Start a development server
- `npm run build` - Build a static version of the files
- `npm run cypress:open` - Open [cypress](https://www.cypress.io/) for tests
- `npm run deploy` - Deploy newest build on `gh-pages` branch
- `npm run test` - Run all tests
