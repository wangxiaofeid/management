import 'core-js/fn/object/assign';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './stores/configureStore'
import routes from './routes'
import './styles/App.css'
import 'antd/dist/antd.css';

const preloadedState = {};
const store = configureStore(preloadedState)

const history = syncHistoryWithStore(browserHistory, store)

// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)

