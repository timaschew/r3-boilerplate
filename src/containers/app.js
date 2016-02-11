import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import logo from '../logo.png'
import '../styles/globals.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // children are components which defined in the routes as children of App
    const { children } = this.props
    return (
      <div style={{padding: '10px'}}>
        <img src={logo} style={{height: '50px'}}/>
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
