<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6">
          <el-page-header @back="goBack" content="添加">
          </el-page-header>
          <br>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
              <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>

  </el-container>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不能为空'));
      }
      callback();
    };
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机不能为空'));
      }
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("请输入正确的手机号"));
      }
      callback();
    };
    var checkAddress = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('地址不能为空'));
      }
      callback();
    };
    return {
      ruleForm: {
        // name: 'Artist',
        // phone: '17875058835',
        // address: '深圳',
        name: '',
        phone: '',
        address: '',
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        address: [
          { validator: checkAddress, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = this.$qs.stringify({
            name: this.ruleForm.name,
            phone: this.ruleForm.phone,
            address: this.ruleForm.address,
          });
          this.$axios.post('/api/insert.php',data).then((res)=>{
            if(res.data.code == 0){
              this.$message({
                message: res.data.msg,
                type: 'success',
                onClose:()=>{
                  localStorage.removeItem('meta')
                  this.$router.push({path:'/'})
                }
              });
            }

          }).catch(err => {
            console.log(err)
          })

        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goBack() {
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style>
@import '~element-ui/lib/theme-chalk/index.css';
body{padding: 0;margin: 0;}
a{text-decoration: none;color: #DF3F23;}

</style>