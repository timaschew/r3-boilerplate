import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <div>The page you are looking for "<strong>{this.props.url}</strong>" does not exist.</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    url: state.routing.location.pathname
  }
}

export default connect(mapStateToProps, {
})(NotFoundPage)
