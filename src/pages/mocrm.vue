<template>
    <div>
        <!-- 内容区域 -->
        <div class="content">
            <h2 class="tit2">商机管理</h2>
            <!-- 表格内容区域 -->
             <el-button type="primary" size="small">我的星标项目</el-button>
             <el-button type="primary" size="small">汇总</el-button>
             <el-button type="primary" size="small">导出当前页</el-button>

            <el-input class="search_input" v-model="input" placeholder="请输入内容" size="small"></el-input>
             <el-button type="primary" size="small" @click="search(input)">搜索</el-button>
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
export default {
  // 数据
  data() {
    return {
      datas1: [],
      clist1: [],
      allData: [],
      activeName: "first",
      input: ""
    };
  },
  mounted() {
    const data = {
      page: "商机管理",
      pageNo: 1,
      pageSize: -1,
      leaderList: [],
      statusList: [],
      star: "",
      viewId: ""
    };
    this.$axios
      .post("/shopping/findAllCRM", data)
      .then(res => {
        console.log(res);
        (this.datas1 = res.data.pageData.data),
          (this.clist1 = res.data.mapList.clist),
          (this.allData = res.mapList),
          console.log(res.data.mapList.clist);
        console.log(res.data.pageData.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // 方法
  methods: {
    handleClick(tab, event) {},
    handleEdit(index, row) {},
    handleDelete(index, row) {},
    search(input) {
      console.log(input);
    }
  }
};
</script>
<style scoped>
.siber {
  width: 200px;
  float: left;
  margin-right: 20px;
}
.content {
  width: 85%;
  float: left;
}
.tit2 {
  width: 100%;
  text-align: center;
  font-size: 22px;
}
.search_input {
  width: 15%;
}
</style>

