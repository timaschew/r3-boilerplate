import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // children are components which defined in the routes as children of App
    const { children } = this.props
    return (
      <div>
        <h1>Menu</h1>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  push: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
  push
})(App)
