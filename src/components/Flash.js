import React, { Component } from 'react';

/**
 * Flash component
 */
class Flash extends Component {
  /**
   * Contructor
   */
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  /**
   * Setup timer to hide Component after delay
   */
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        show: false
      })
    }, 5000)
  }

  /**
   * Clear timeout set when rendering the component
   */
  componentWillUnMount() {
    const { timeout } = this

    if (timeout) {
      clearTimeout(timeout)
    }
  }

  /**
   * Toggle visibility of Flash Component
   */
  hideFlash() {
    this.setState({
      show: false
    })
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div>
        { this.state.show &&
          <div className="notification is-danger">
            <button className="delete" onClick={this.hideFlash.bind(this)}></button>
            { this.props.message }
          </div>
        }
      </div>
    )
  }
}

export default Flash
