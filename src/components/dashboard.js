import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import '../styles/styles.css'
let styles = {}

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h3><i className="fa fa-4 fa-fort-awesome"></i> </h3>
        <div>Current URL: {this.props.url}</div>
        <div>Some Links:</div>
        <div className={styles.menu}>
          <div>
            <Link to={'/'}>/</Link>
          </div>
          <div>
            <Link to={'/dashboard'}>/dashboard</Link>
          </div>
          <div className={styles.menu_link}>
            <Link to={'/does-not-exist'}>Link to nowhere</Link>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {

}
