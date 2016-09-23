import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'

import App from './App'
import Home from './page/Home.vue'

Vue.use(VueRouter);
Vue.use(Resource)

var router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'is-active'
});

const lazyLoading = (path, ext = '.vue') => {
  return (resolve) => {
    require([`${path}${ext}`], resolve)
  }
}
  
router.map({
	'/':{
	  	name: 'home',
	  	component: Home
	}
	// '/h': {
	//     name: 'home2',
	//     component: Home2,
	// },
	// '/linkanalysis': {
	// 	component: Linkanalysis,
	// 	subRoutes: {
	// 		'/graph': {
	// 			name: "复杂网络",
	// 			component: Graph
	// 		},
	// 		'/associations': {
	// 			name: "团伙欺诈",
	// 			component: Associations
	// 		}
	// 	}
	// }
})

router.start(App, '#app')
