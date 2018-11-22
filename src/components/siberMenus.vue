<template>
    <div>
      <!-- 用户信息 -->
      

      <!-- 菜单栏 -->
        <el-row class="tac">
          <el-col :span="3">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
                    <el-submenu>
                        <template slot="title">          
                          <span>
                              <router-link to="/home">首页</router-link>
                          </span>
                        </template>
                    </el-submenu>
                    <el-submenu  v-for="(menu,index) in menus" :key="index" :index="index+''" v-if="menu.pId=='1'">
                      <template slot="title">
                        <i></i>
                        <span>{{menu.nodeName}}</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item  v-for="(menu2,index2) in menus" :key="index2"  v-if="menu2.pId==menu.id">{{menu2.nodeName}}</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
    </div>
</template>


<script>
      export default {
        // get请求
        get (url1, param = {}) {
          return new Promise((resolve, reject) => {
            axios.get(url,{params:param})
              .then(res => {
              resolve(res)
            }, err => {
                reject(err)
            })
          })
        },


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
            menus:[],
            
        }
    },
    // 加载
    mounted(){

    },
    created(){
      this.$axios("/shopping/findMenu")
      .then(res => {
        console.log(res);
        this.menus = res.data.pageData.data;
        console.log(res.data.pageData.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
</script>



<style>

</style>

