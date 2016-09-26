import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import NoMatch from '../containers/NoMatch'
import Other from '../containers/Other'

export default (
  	<Route path="/" component={App}>
	    <Route path="/test" component={Other} />
	    <Route path="*" component={NoMatch}/>
  	</Route>
)

// <Route path="/app" component={App} />