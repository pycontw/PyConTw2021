![pycontw-2021 ci](https://github.com/pycontw/pycontw-2021/actions/workflows/ci.yml/badge.svg)
![pycontw-2021 cd](https://github.com/pycontw/pycontw-2021/actions/workflows/cd.yml/badge.svg)
![nuxt](https://img.shields.io/badge/Framework-Nuxt.js-04C58E.svg)

# pycontw-2021

This is PyConTW 2021 Conference Website's frontend repository.

## Set up a Development Environment

#### Requirements
- node >= 12.20.2
> You can refer to `package.json` file for more details.

#### Method 1: `Develop on your local machine`
1. Clone this repository.
2. Add Environment Variables to configure this project:
```bash
BUILD_TARGET=server                                                   
HOST=127.0.0.1
BASE_URL=http://127.0.0.1:9876
API_URL_BROWSER=http://127.0.0.1:9876
```
3. Install dependencies:
```bash
npm install
```
4. Serve with hot reload at localhost:3000:
```bash
npm run dev
```

- Also, we have mock server to handle API on local:
```bash
# You need to add Environment Variables(Step.2). Otherwise, some of the pages may not work correctly.
npm run json-server
```

#### Method 2: `Run Development Server with Docker`

1. Clone this repository.
2. Simply run the docker-compose commands to launch or stop the mock API server & the dev server:


```bash
# Launch the dev server and the mock API server
docker-compose -f ./docker-compose-dev.yml up

# Stop the dev server and the mock API server
docker-compose -f ./docker-compose-dev.yml down
```

## Start to contribute
- You can choose method 1 or method 2 to build setup, then you can start to contribute. 🙌
- Please follow [Github Flow](https://guides.github.com/introduction/flow/).

## Build for production and launch server
```bash
npm run build
npm run start

# Or just run:
npm run serve
```

## Generate static project
```bash
npm run generate
```

## Check your code:
```bash
npm run lint
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).