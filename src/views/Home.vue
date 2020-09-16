<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6">
          <router-link to="/add">
            <el-button type="primary" >添加</el-button>
          </router-link>
          <br>
          <br>
          <el-table
              v-loading="loading"
              :data="tableData"
              border
              style="width: 100%">
            <el-table-column
                prop="id"
                label="ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="手机"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="6" :offset="9">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="meta.current_page"
              :page-sizes="[10, 20, 30, 40, 50]"
              :page-size="meta.length"
              layout="total, sizes, prev, pager, next, jumper"
              :total="meta.total">
          </el-pagination>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      loading:true,
      meta:{
        total:0,
        current_page:1,
        length:10
      }
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    getList() {
      this.getMeta()
      this.$axios.get(`/api/index.php?page=${this.meta.current_page}&length=${this.meta.length}`).then((res)=>{
        this.tableData = res.data.data
        this.meta = res.data.meta
        this.loading = false
        localStorage.setItem('meta',JSON.stringify(res.data.meta));
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit(index,id){
      this.$router.push({path:`/edit/${id}`})
    },
    handleDelete(index,id){
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var data = this.$qs.stringify({
          id:id,
        });
        this.$axios.post('/api/delete.php',data).then((res)=>{
          if(res.data.code == 0){
            this.$message({
              type: 'success',
              message: res.data.msg,
              onClose:()=>{
                this.getList()
              }
            });
          }
        }).catch(err => {
          console.log(err)
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSizeChange(length){
      this.meta.length = length
      this.getMeta()
      this.$axios.get(`/api/index.php?length=${length}&page=${this.meta.current_page}`).then((res)=>{
        this.tableData = res.data.data
        this.meta = res.data.meta
        this.loading = false
        localStorage.setItem('meta',JSON.stringify(res.data.meta));
      }).catch(err => {
        console.log(err)
      })
    },
    handleCurrentChange(current_page){
      this.meta.current_page = current_page
      this.getMeta()
      this.$axios.get(`/api/index.php?page=${current_page}&length=${this.meta.length}`).then((res)=>{
        this.tableData = res.data.data
        this.meta = res.data.meta
        this.loading = false
        localStorage.setItem('meta',JSON.stringify(res.data.meta));
      }).catch(err => {
        console.log(err)
      })
    },
    getMeta(){
      if(localStorage.getItem('meta')){
        this.meta = JSON.parse(localStorage.getItem('meta'))
      }
    }
  }
};
</script>

<style>
@import '~element-ui/lib/theme-chalk/index.css';
body{padding: 0;margin: 0;}
a{text-decoration: none;color: #DF3F23;}

</style>