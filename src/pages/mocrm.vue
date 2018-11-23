<template>
    <div>
           <!-- 侧边菜单 -->
        <div class="siber">
            <siberMenus ></siberMenus>
        </div>
        <!-- 内容区域 -->
        <div class="content">
            <h2 class="tit2">商机管理</h2>
            <!-- 表格内容区域 -->
            <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="商机总表" name="first">
                        <template>
                            <el-table
                                :data="allData"
                                style="width: 100%">
                                <el-table-column v-for="(item,index) in allData" :key="index"
                                :label="item.t_column"  :prop="item.t_dname"
                                width="180">
                                <template slot-scope="scope">
                                    <span style="margin-left: 10px" :name="item.t_dname">{{ scope.row.id}}</span>
                                </template>
                                </el-table-column>
                            </el-table>
                        </template>


                    </el-tab-pane>
                    <el-tab-pane label="线索" name="second">线索</el-tab-pane>
                    <el-tab-pane label="商机" name="third">商机</el-tab-pane>
                    <el-tab-pane label="合同管理" name="fourth">合同管理</el-tab-pane>
                </el-tabs>
            </template>
        </div>
    </div>
</template>
<script>
       // 引入组件
    import siberMenus from '../components/siberMenus'


    export default{
        // 方法
         methods:{
            handleClick(tab, event) {},
            handleEdit(index, row) {},
            handleDelete(index, row) {}
            },
            
         // 数据
        data(){
            return {
                 datas1:[],
                 clist1:[],
                 allData:[],
                 activeName: 'first'
                
            }
        },
    
        mounted(){
            const data = {"page":"商机管理","pageNo":1,"pageSize":-1,"leaderList":[],"statusList":[],"star":"","viewId":""};
                this.$axios.post("/shopping/findAllCRM",data)
                .then(res =>{
                    console.log(res)
                    this.datas1 = res.data.pageData.data,
                    this.clist1 = res.data.mapList.clist,
                    this.allData = res.mapList,
                    console.log(res.data.mapList.clist)
                    console.log(res.data.pageData.data)
                })
                .catch(error =>{
                  console.log(error)
                })
          
               

            // this.$axios("/shopping/findAllCRM/"+data)
            // .then(res => {
            //     console.log(res);
            //     // this.menus = res.data.pageData.data;
            //     // console.log(res.data.pageData.data)
            // })
            // .catch(error => {
            //     console.log(error)
            // })
        },
         components:{siberMenus}
    }
</script>
<style scoped>
    .siber{
        width: 200px;
        float: left;
        margin-right: 20px;
    }
    .content{
        width: 85%;
        float: left;
    }
    .tit2{
        width: 100%;
        text-align: center;
        font-size: 22px
    }
</style>

