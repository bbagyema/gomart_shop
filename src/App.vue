<template>
  <div id="app">
    <Signup/>
    <Footer/>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Signup from './components/Signup.vue'
import Footer from './components/Footer.vue'
//import Login from './components/Login.vue'
//import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components:{
    Signup,
    Footer
  
  },
  data(){
    return{
    todos:[{
        id:1,
        title:'todo1',
        completed:false
      },{
        id:2,
        title:'todo2',
        completed:false
      },{
        id:3,
        title:'todo3',
        completed:false
      }]
    }
 }

}
</script>

<style>

</style>
