import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'

import Other from '../page/Other'

const routes = [{
		path: '/',
    component: App,
    indexRoute: { component: Other },
    childRoutes: [
      {
      	path: 'test',
      	component: Other
      },
      {
      	path: 'test2',
	      getComponents(location, callback) {
			    require.ensure([], function (require) {
			      callback(null, require('../page/Other2'))
			    })
				},
				childRoutes: [
					{
						path: ':name',
						getComponents(location, callback) {
					    require.ensure([], function (require) {
					      callback(null, require('../page/NameShow'))
					    })
						}
					}
				]
			},
    	{
    		path: 'test/:id',
    		getComponents(location, callback) {
			    require.ensure([], function (require) {
			      callback(null, require('../page/TestShow'))
			    })
				}
    	},
    	{
    		path: 'testFile',
    		getComponents(location, callback) {
			    require.ensure([], function (require) {
			      callback(null, require('../page/TestFile'))
			    })
				}
    	},
    	{
    		path: 'testFile2',
    		getComponents(location, callback) {
			    require.ensure([], function (require) {
			      callback(null, require('../page/TestFile2'))
			    })
				}
    	},
    	
    ]
	},
	{
		path: '*',
		getComponents(location, callback) {
	    require.ensure([], function (require) {
	      callback(null, require('../page/NoMatch'))
	    })
		}
	},
]

export default routes;