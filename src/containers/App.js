import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../redux/fetchActions'
import Wrapper from '../components/Wrapper'

const mapDispatchToProps = (dispatch) => (
  {
    getPosts: () => dispatch(getPosts())
  }
)

export class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return <Wrapper/>
  }
}

export default connect(null, mapDispatchToProps)(App)
