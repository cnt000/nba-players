## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn test`

Run test

### `yarn type-check`

Run Typescript type check

### `yarn format`

Run prettier to format code

### `yarn lint`

Run eslint to lint

## Demo

To try app follow this link: https://nba-players-helixa.surge.sh

To deploy in surge static server do (you have to be logged):

```
$ yarn build
$ surge build/ --domain nba-players-helixa.surge.sh
```
