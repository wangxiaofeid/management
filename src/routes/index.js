import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'

import NoMatch from '../page/NoMatch'
import Other from '../page/Other'
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
      { path: 'test/:id', component: TestShow,},
      { path: '*', component: NoMatch },
    ]
}

export default routes;