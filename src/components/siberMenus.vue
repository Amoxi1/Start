<template>
    <div>
      <!-- 用户信息 -->
      

     

    <el-row class="tac">
  <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-submenu>
      <el-submenu  v-for="(menu,index) in menus" :key="index" :index="index+'1'" v-if="menu.pId=='1'">
          <template slot="title">
          <i></i>
          <span>{{menu.nodeName}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item  v-for="(menu2,index2) in menus" :key="index2" index='index2'  v-if="menu2.pId==menu.id">
              <router-link :to="{name:'Mocrm'}">{{menu2.nodeName}}</router-link>
            </el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>


    </div>
</template>


<script>
      export default {

    methods: {
      // 菜单的展开
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }

    },
    // 数据
    data(){
        return{
            menus:[]
        }
    },
    // 加载
    mounted(){

    },
    created(){
      this.$axios("/shopping/findMenu")
      .then(res => {
        //console.log(this)
        this.menus = res.data.pageData.data;
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
</script>



<style>

</style>

