<template>
    <div>
        <div class="box">
            <!-- 标题 -->
            <h2 class="tit">企业业务运行系统</h2>
            <!-- 用户输入部分 -->
            <div class="user_box">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="用户名:">
                        <el-input class="user_input" v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item class="passworld_input" label="密码:">
                        <el-input class="user_world" v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 登陆 -->
            <div class="login_btn">
                 <el-button  @click="login()" type="primary">
登陆    
                        <!-- <router-link :to="urlData.home">登陆</router-link> -->
                

                 </el-button>
            </div>
            <!-- 其他登陆方式 -->
            <div class="other_box">
                <div class="text_style">其他登陆方式</div>
                <div class="other_btn">
                        <a class="btn bt1" href="toWeChat"></a>
                        <a class="btn bt2" href="finda"></a>
                        <a class="btn bt3" href="#">注册</a>
                </div>
                <br>
                <div class="text_style zhuyi">注意：该系统仅兼容IE9以上及其他浏览器</div>
            </div>

        </div>


    </div>
</template>
<script>
    export default{
        name:"login",
        data(){
            return{
                   labelPosition: 'right',
                    formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                    },
                    urlData:{
                        home:"/home"
                    },
            }
        },
        methods:{
            login(){
                const self = this;
                const userName = document.getElementsByClassName("user_input")[0].children[0].value;
                const userWorld = document.getElementsByClassName("user_world")[0].children[0].value;
                console.log(userName)
                console.log(userWorld)
                const params = {
                    "name":userName,
                    "password":userWorld
                };
                console.log(params)
                this.$axios.post("/shopping/vuelogin", params)
                .then(function (response) {
                    console.log(response.data.result)
                    if(response.data.result=='true'){
                        self.$router.push('/home')
                    }else{
                      alert("用户信息异常")
                    }
                })
                .catch(function (error) {
                　　alert(error);
                });

            }
        }
    }
</script>
<style scoped>
    .box{
        background-image:url(../assets/login.jpg);
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
    }
    .tit{
        color: #ffffff;
        font-size: 38px;
        font-weight: 100;
        line-height: 50px;
        text-align: center;
        margin-top: 8%;
    }
    .user_input{
        width: 30%;
    }
    .passworld_input{
        width: 34.8%;
    }
    .user_box{
        margin-left: 38%;
        color: #000;
        margin-top: 5%
    }
    .login_btn{
        margin-top: 2%;
        margin-left: 56%
    }
    .text_style{
        font-size: 20px;
        font-weight: 300;
        color: #555;
        line-height: 30px;
        text-align: center
    }
    .other_box{
        margin-top: 3%;
    }
    .other_btn{
        width: 100%;
        margin-left: 43%;
        margin-top: 30px;
    }
    .btn{
         background: url(../assets/qywx.jpg);
        display: inline-block;
        width: 80px;
        height: 80px;
        float: left;
        margin-right: 20px;
    }
    .zhuyi{
        margin-top: 100px;
    }
    .bt3{
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        height: 80px;
        width: 80px;
        margin: 5px;
        text-align: center;
        line-height: 66px;
        background: #a3140d;
        border: 1px solid #a3140d;
        font-size: 16px;
        color: #fff;
        -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;
    }
    .bt2{
        background: url("../assets/qywx.jpg") center 1000%;
        background-size: cover;
        text-align: center;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        -moz-border-radius: 50%; -webkit-border-radius: 50%;
    }
    .bt1{
        background: url("../assets/wx.png") center 1000%;
        background-size: cover;
        text-align: center;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        -moz-border-radius: 50%; -webkit-border-radius: 50%;
    }

</style>
