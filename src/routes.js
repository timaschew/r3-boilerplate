import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './containers/app'
import DashboardPage from './containers/dashboard-page'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage}/>
    <Route path="dashboard" component={DashboardPage} />
  </Route>
)
