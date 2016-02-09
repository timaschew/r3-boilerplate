import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Dashboard from '../components/dashboard'

class DashboardPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Dashboard />
    )
  }
}

DashboardPage.propTypes = {

}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
})(DashboardPage)
