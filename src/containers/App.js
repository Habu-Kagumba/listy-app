import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../redux/fetchActions'
import Wrapper from '../components/Wrapper'

const mapDispatchToProps = (dispatch) => (
  {
    getPosts: () => dispatch(getPosts())
  }
)

/**
 * Application Container Component
 */
export class App extends Component {

  /**
   * Hydrate the store with items from https://jsonplaceholder.typicode.com/
   */
  componentDidMount() {
    this.props.getPosts()
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return <Wrapper/>
  }
}

export default connect(null, mapDispatchToProps)(App)
