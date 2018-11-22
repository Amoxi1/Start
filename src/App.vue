<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import siberMenus from './components/siberMenus.vue'



export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{siberMenus}
  

}
</script>

<style scoped>



</style>
