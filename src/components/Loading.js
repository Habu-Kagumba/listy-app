import React, { Component } from 'react';

/**
 * Loading indicator component
 */
export class Loading extends Component {

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return <p className="notification is-info loading">Loading......</p>
  }
}

export default Loading
