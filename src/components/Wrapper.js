import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Loading from './Loading'
import Flash from './Flash'
import Items from './Items'

/**
 * subscribe to Redux store updates
 */
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    flash: state.flash
  }
}

/**
 * Wrapper Component
 */
export class Wrapper extends Component {

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { isLoading, flash } = this.props
    const flashError = _.isUndefined(flash) ? false : flash.error

    return (
      <div>
        <header>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Listy Application</h1>
                <h2 className="subtitle">Read, Update and Delete your post list</h2>
              </div>
            </div>
          </section>
        </header>
        <main className="container is-widescreen">
          <br/>
          { isLoading && <Loading /> }
          { flashError && <Flash message={flash.message} /> }
          <Items />
          <br/>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>Created by <strong>Herbert Kagumba</strong>.</p>
              <p><a href="https://github.com/Habu-Kagumba"><i className="fab fa-github"></i></a></p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Wrapper)
