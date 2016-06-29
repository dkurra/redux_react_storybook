import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getSomeAsyncData } from '../actions';

class AsyncApp extends Component {
  componentWillMount() {
    this.props.getSomeAsyncData();
  }

  render() {
    return (
      <div>
          {this.props.loading && this.props.response.length === 0 && <h2>Loading...</h2> }
          {this.props.response.map((post, i) =>
                    <li key={i}>{post.title}</li>
          )}
      </div>
    )
  }
}

const  mapStateToProps = (state)  => {
  const { loading, response } = state.postsByJsonPlaceholder.toJS()
  return {
    loading,
    response
  }
}

const mapDispatchToProps = {
 getSomeAsyncData
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);