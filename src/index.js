import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { Normalize } from 'styled-normalize'
import App from './App'
import * as serviceWorker from './serviceWorker'

const Root = () => (
  <>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </>
)

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()
