// import {
//   MAPFILESET,
//   MAPFILEDATASET
// } from '../mutation-types'

const menu = [
  {
    link: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-tachometer'
  },
  {
    label: 'Charts',
    icon: 'fa-bar-chart-o',
    expanded: true,
    subMenu: [
      {
        link: 'ChartJs',
        label: 'ChartJs'
      },
      {
        link: 'Chartist',
        label: 'Chartist'
      },
      {
        link: 'Peity',
        label: 'Peity'
      },
      {
        link: 'Plotly',
        label: 'Plotly'
      }
    ]
  }
]

// initial state
const state = {
  menu: menu
}

// // mutations
// const mutations = {
//   [MAPFILESET] (state, file) {
//     state.selectedFile = file
//   },

//   [MAPFILEDATASET] (state, file, data) {
//     console.log(file,data);
//     state.fileData.push({
//       file,
//       data
//     })
//   }
// }

export default {
  state,
  // mutations
}