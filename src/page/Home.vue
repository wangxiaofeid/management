<template>
  <div class="hello">
    <h1>{{ msg }}fdsafdsa</h1>
    
    <a v-link="{ path: 'h' }">Home2</a>


    哈哈哈

    <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px;" dismissable>
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>Well Done!</strong>
      <p>You successfully read this important alert message.</p>
    </alert>

    <button class="btn btn-default" v-on:click="toAlert" >Click</button>

  </div>
</template>

<script>
// import { incrementCounter } from '../vuex/actions'
// import { vButton } from 'vue-antd'
import { alert } from 'vue-strap'

export default {
  components: {
    alert
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      showRight: false
    }
  },
  methods: {
    toAlert: function(){
      this.showRight = true;
    }
  },
  ready: function() {
    console.log(1)
  }
}
</script>
