# Gifigram Web App

Client App for the Gifigram project.

## Repo

- [gifigram](https://github.com/iarrieta90/gifigram)

## Getting Started

### Install Dependencies

This is a monorepo app made with Yarn. Therefore, you will need to run `yarn` in
the root and then the individual scripts of each package.

The `web` package will be run by default in the following url:
`http://localhost:3000`.

### Firebase

This app uses Firebase Auth as the auth provider, so you will need to configure
it first.

Once you have created a firebase app in the firebase console, you will need to
copy the settings and paste each value of the config object as environment
variables.

### Environment variables

These are the required environment variables for the config of the app. The ones
that start with `FB_` are needed for the Firebase Admin config.

These are all used in the `packages/web/src/services/auth/auth.js` file:

```js
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
```

## Env variables

```bash
# .env
REACT_APP_API_KEY=...
REACT_APP_AUTH_DOMAIN=...
REACT_APP_PROJECT_ID=...
REACT_APP_STORAGE_BUCKET=...
REACT_APP_MESSAGING_SENDER_ID=...
REACT_APP_APP_ID=...
REACT_APP_API_BASE_URL=http://localhost:4000
```

## License

Licensed under the [MIT License](./LICENSE).
