# r³ Boilerplate

Minimal Boilerplate for Redux + React + React-Router-Redux

## What's in it?

Everything what you need to build an awesome Single Page Application:

- webpack via express middleware
- redux
- react
- react-router-redux (formerly known as redux-simple-router)
  - no [rackt/history](https://github.com/rackt/history) anymore!
- redux-devtools

## Derivation from [real-world example](https://github.com/rackt/redux/tree/master/examples/real-world)

- no camel case file names
- almost empty containers and components
- just the route reducer and an empty dummy reducer
- no actions
- simple directory structure with
  - one root container - [App](./src/containers/app.js)
  - and two child container - [DashboardPage](./src/containers/dashboard-page.js)
    - the dashboard is mounted as two different paths
  - (in terms of [routes](./src/routes.js))
- middleware to hook into actions globally

## What's about styles?

coming soon
