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

<style >

    .siber{
        width: 200px;
        float: left;
        margin-right: 20px;
    }
    .content{
        width: 85%;
        float: left;
    }

</style>
