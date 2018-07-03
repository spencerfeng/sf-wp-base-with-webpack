import Vue from 'vue/dist/vue.min.js'
import ExampleComponent from '../../../vue-components/ExampleComponent.vue'

new Vue({
  el: '#app',

  components: {
    'example-component': ExampleComponent
  },

  mounted() {
    console.log('example component mounted');
  }
})