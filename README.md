## TensorFlow.js Progressive Web App

This is a web application where users can classify images selected locally or taken with their
device's camera. The app uses TensorFlow.js and a pre-trained model converted to the TensorFlow.js
format to provide the inference capabilities. This model is saved locally in the browser using
IndexedDB. A service worker is also used to provide offline capabilities.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Dependencies

In the project directory, run:

### `yarn install`


## Setup and Configuration

In the `public` folder, you will see a model folder. The TensorFlow.js model files need to go there
(i.e. the `model.json` and `*.bin` files).

In `src/model`, there is a `classes.js` file which lists the possible classes that the model can classify
for. Alter this to fit your model.

If deploying the application, change the `API_ENDPOINT` in `src/config.js` to the proper endpoint.
For development, leave it as is.

## Development Mode

In the project directory, run:

### `yarn start-dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits to the UI.<br>
You will also see any lint errors in the console.

The API server is hosted on `http://localhost:5000` by default.

## Production Mode

In the project directory, run:

### `yarn  build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Since we use Node.js to deploy the app, simply run:

### `node server.js`

This will bring up the server which will serve both the API and built UI code. Visit it at `http://localhost:5000`.

**Note**: Since the production app uses a service worker, to see updates in the code, all tabs of the app
in the browser must be closed completely to prompt an update of the code when you revisit the page.


## Other Information

To prompt the browser to download a new model if one is available, the app queries a simple endpoint
`/api/model_info` from the server. This endpoint provides the date the model was last updated as provided by
`model_info.txt` for now. This can be updated with `date > model_info.txt`. If the date of the application's
locally stored model is before this date, an update is prompted, and the new one is updated and saved.
