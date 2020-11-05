import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './AppStore'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './config';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
module.hot.accept();
registerServiceWorker();
