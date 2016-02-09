import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Dashboard extends Component {
  render() {

    return (
      <div className="dashboard">
        <h3>Dashboard</h3>
        <Link to={'/dashboard'}>
          <div>/dashboard</div>
        </Link>
        <Link to={'/does-not-exist'}>
          <div>Link to Nowhere</div>
        </Link>
      </div>
    )
  }
}

Dashboard.propTypes = {

}
