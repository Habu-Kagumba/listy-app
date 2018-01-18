import React, { Component } from 'react';

class Flash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        show: false
      })
    }, 5000)
  }

  componentWillUnMount() {
    const { timeout } = this

    if (timeout) {
      clearTimeout(timeout)
    }
  }

  hideFlash() {
    this.setState({
      show: false
    })
  }

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
