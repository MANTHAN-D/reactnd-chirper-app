import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboad extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map(id => {
            return <li key={id}>Tweet ID: {id}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  }
}

export default connect(mapStateToProps)(Dashboad)