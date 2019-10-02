# Deploy web app on IBM Cloud using Cloud Foundry

These are instructions for a quick deployment of the web app on IBM Cloud.

## Prerequisites

* An IBM Cloud account. If you do not have one, you can register for
  free [here](https://cloud.ibm.com/registration):
* Ensure that the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html)
  tool is installed locally. Follow the instructions in the linked documentation to
  configure your environment.

## Update manifest.yml

In the `manifest.yml` file found in the root of the project, change the `route` value to a
unique route of your choosing by replacing the `your-host` placeholder. For example, route could be
`- route: my-web-app.mybluemix.net`. Just make sure that the subdomain is not already taken.
This route corresponds to the URL for which the app will be accessible from. Also, feel free
to change the value for `name` which will correspond to the name of your Cloud Foundry app.

## Update app config.js

In `src/config.js`, update the parameter `API_ENDPOINT` to use the route you
previously specified in the `manifest.yml` file. Using the above example route, this would be:

```
API_ENDPOINT: 'https://my-web-app.mybluemix.net/api',
```

> **NOTE**: `https` is used because Cloud Foundry apps on the IBM Cloud are hosted using HTTPS.

## Make sure build files are up to date

From the root of the project, run:
```bash
yarn build
```

If changes are made to the code, and the app needs to be updated, you will need to `build` again.

## Deploy the app

From the root of the project run:

```bash
ibmcloud cf push
```

This will push a new app or update the app on the IBM Cloud. You can view your apps online from the
IBM Cloud [resource list](https://cloud.ibm.com/resources).

## Visit deployed app

In a browser, navigate to `https://<your app route>`.
