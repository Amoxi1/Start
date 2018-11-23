<template>
    <div>
        <!-- 侧边框 -->
        <div class="siber">
            <siberMenus ></siberMenus>
        </div>
        <div class="content">
            <h2 class="tit">欢迎使用EBO系统</h2>
        </div>
    </div>
</template>
<script>
// 引入组件
import siberMenus from "../components/siberMenus";

export default {
  name: "home",
  data() {
    return {};
  },

  components: { siberMenus }
};
</script>
<style scoped>
<<<<<<< HEAD
    .siber{
        width: 200px;
        float: left;
        margin-right: 20px;
    }
    .content{
        width: 85%;
        float: left;
    }
    .tit{
        width: 100%;
        text-align: center;
        font-size: 28px
    }
=======
>>>>>>> 822c371b34a49511ab1935753043d07b133b526e
</style>

