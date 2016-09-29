import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'

import NoMatch from '../page/NoMatch'
import Other from '../page/Other'
// import Other2 from '../page/Other2'
import TestShow from '../page/TestShow'

// export default (
//   	<Route path="/" component={App}>
// 	    <Route path="/test" component={Other} />
// 	    </Route>
// 	    <Route path="*" component={NoMatch}/>
//   	</Route>
// )

const routes = { path: '/',
    component: App,
    indexRoute: { component: Other },
    childRoutes: [
      	{ path: 'test', component: Other },
      	{ path: 'test2',  //component: Other2
	      	getComponents(location, callback) {
			    require.ensure([], function (require) {
			      callback(null, require('../page/Other2'))
			    })
			}
		},
      	{ path: 'test/:id', component: TestShow,},
      	{ path: '*', component: NoMatch },
    ]
}

export default routes;