import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import throttle from 'lodash/throttle'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './service_worker/registerServiceWorker'
import configureStore from './redux/store'
import { loadState, saveState } from './redux/localStorage'

const persistedState = loadState()
const store = configureStore(persistedState)

store.subscribe(throttle(() => {
  saveState({
    isLoading: false,
    items: store.getState().items,
    flash: { error: false, messages: null }
  })
}, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
