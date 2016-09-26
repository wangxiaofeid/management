import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

import rootReducer from '../reducers'
import DevTools from '../devtools';

export default function configureStore(preloadedState) {
  let logger = createLogger();

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, logger),
      (typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
