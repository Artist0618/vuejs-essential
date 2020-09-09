<template>
  <el-container>
    <el-header>
      <el-row class="header">
        <el-col :span="8" class="logo el-alert"><a href="">{{host}}</a></el-col>
        <el-col :span="8" class="menu">
          <a href="" v-for="menu in menuList" :key="menu">{{menu}}</a>
        </el-col>
        <el-col :span="8" class="user">
          <div class="username">{{user.name}}</div> 
          <img :src="user.avatar" class="el-avatar--circle el-avatar--large">
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <el-row class="nav">
        <el-col :span="4" v-for="nav in navList" :key="nav">
          <a href="">
            <div class="icon"><img :src="nav.imgUrl"></div>
            <span>{{nav.name}}</span>
          </a>
        </el-col>
      </el-row>
      <el-row class="screen">
        <el-col :span="4" class="tag">
          <div>Default label</div>
          <div class="el-icon-error"></div>
        </el-col>
        <el-col :span="4">
          <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
        </el-col>
      </el-row>
      <el-row class="badge">
        <el-col :xs="24" :md="16" class="myChart">
            <div id="myChart"></div>
        </el-col>
        <el-col :xs="24" :sm="1" :md="1">
          <div style="height: 20px;width: 20px"></div>
        </el-col>
        <el-col :xs="24"  :md="6"  class="item">
          <div class="title">Last month</div>
          <div class="subitem">
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
            <div>Item4<span class="el-icon-error"></span></div>
          </div>
          <div class="subitem">
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
            <div>Item4</div>
          </div>
          <div class="line">
            <hr>
          </div>
          <div class="title">Price</div>
          <div class="price">$73.65</div>
          <div class="bottom">
            <a href="" class="button">Pay Now</a>
          </div>
        </el-col>
      </el-row>

      <el-row class="card">
        <el-col :xs="24" :md="6">
          <div class="item">
            <div class="title">Last month</div>
            <div class="subitem">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
              <div>Item4<span class="el-icon-error"></span></div>
            </div>
            <div class="subitem">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
              <div>Item4</div>
            </div>
            <div class="line">
              <hr>
            </div>
            <div class="title">Price</div>
            <div class="price">$73.65</div>
          </div>
        </el-col>
        <el-col :xs="24" :md="5">
          <div class="item">
            <div class="title">Last month</div>
            <div class="subitem">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
              <div>Item4<span class="el-icon-error"></span></div>
            </div>
            <div class="subitem">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
              <div>Item4</div>
            </div>
            <div class="line">
              <hr>
            </div>
            <div class="title">Price</div>
            <div class="price">$73.65</div>
          </div>
        </el-col>
        <el-col :xs="24" :md="5">
          <div class="item">
            <div class="title">Last month</div>
            <div class="subitem">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
              <div>Item4<span class="el-icon-error"></span></div>
            </div>
            <div class="subitem">
              <div>Item1</div>
              <div>Item2</div>
              <div>Item3</div>
              <div>Item4</div>
            </div>
            <div class="line">
              <hr>
            </div>
            <div class="title">Price</div>
            <div class="price">$73.65</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="1" :md="1" style="padding: 0">
          <div style="height: 20px;width: 20px"></div>
        </el-col>
        <el-col :xs="24" :md="6">
          <div class="item contact">
            <div class="qrcode">
              <img :src="qrCodeUrl" alt="">
            </div>
            <div class="tip">{{tip}}</div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      host:'Smart Home',
      menuList:['Menu1','Menu2'],
      user:{
        avatar:require('../assets/images/avatar.png'),
        name:'Admin'
      },
      navList: [
        {name:'Qrcode',imgUrl:require('../assets/images/qrcode.png')},
        {name:'Card',imgUrl:require('../assets/images/card.png')},
        {name:'Clock',imgUrl:require('../assets/images/clock.png')},
        {name:'Money',imgUrl:require('../assets/images/money.png')},
        {name:'Send',imgUrl:require('../assets/images/send.png')},
        {name:'Hotel',imgUrl:require('../assets/images/hotel.png')},
      ],
      qrCodeUrl:require('../assets/images/qrcode.jpeg'),
      tip:'扫一扫打开 Learnku Vue.js.com'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'), 'light')
      window.onresize = function () {
        myChart.resize()
      }
      myChart.setOption({
        title: { text: 'Basic area chart',textStyle: {color: '#fff'}},
        width:'900',
        legend:{
          width:'auto'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1320, 1320, 1320, 1320, 1320, 1320, 1320],
          type: 'line',
          areaStyle: {},
        }]
      });
    }
  }
};
</script>

<style>
@import '~element-ui/lib/theme-chalk/index.css';
body{padding: 0;margin: 0;}
a{text-decoration: none;color: #DF3F23;}
.header{margin-top: 10px;}
.header .logo a{font-size: 35px;font-weight: bold;}
.header .menu{display: flex;justify-content: space-around;align-items: center;height: 60px;font-size: 20px;}
.header .menu a{font-weight: bold;position: relative;}
.header .menu a:after{content: "";position: absolute;width: 100%;height: 4px;bottom: -10px;left: 0;background-color: #DF3F23;visibility: hidden;transform: scaleX(0);transition: 0.3s ease-in-out;}
.header .menu a:hover:after{visibility:visible;transform:scaleX(1)}
.header .user{height: 60px;display: flex;justify-content: flex-end;align-items: center;padding-right: 20px;}
.header .user .username{padding: 10px;}
.nav{background: #DF3F23;text-align: center;color: #fff;border-radius: 3px;font-weight: bold;}
.nav .el-col{padding: 10px}
.nav .icon img{width: 36px;}
.nav .el-col:hover{background: #E7755C}
.nav a{font-size: 14px;color: #fff;}
.screen{padding:20px 40px 0 40px;background: #f0f2f5;}
.screen .el-col{margin-right: 40px}
.screen .tag{background: #E7755C;border-radius: 3px;padding: 8px;color: #fff;display: flex;align-items: center;justify-content: space-between;width: 220px}
.badge{padding: 20px;background: #f0f2f5;}
.badge .myChart{border-radius: 8px;background: #E7755C;}
.badge #myChart{width:100%;height: 400px;}
.badge .item{height: 400px;background: #E7755C;border-radius: 8px;color: #fff;position: relative;font-weight: bold;padding: 20px;}
.badge .item .title{font-size: 20px}
.badge .item .subitem{padding: 10px 0;}
.badge .item .subitem div{width: 50%;display: inline-block;}
.badge .item .line{position: relative;height: 40px}
.badge .item .line hr{position:absolute;border: 5px solid #E88973;width: 101%;bottom: 0}
.badge .item .price{font-size: 30px;}
.badge .item .bottom{width: 100%;position: absolute;left:0;bottom: 20px;}
.badge .item .bottom .button{background: #ffffff;color: #DF3F23;font-size: 30px;border-radius: 8px;padding: 20px 0;text-align: center;margin:0 20px;display: block}
.card .el-col{padding: 20px}
.card .item{ height: 300px;background: #f0f2f5;border-radius: 8px;padding: 20px;position: relative;overflow:hidden;font-weight: bold;color: #333;}
.card .item .title{font-size: 20px}
.card .item .subitem{padding: 10px 0;}
.card .item .subitem div{width: 50%;display: inline-block;}
.card .item .line{position: relative;height: 40px}
.card .item .line hr{position:absolute;border: 5px solid #EBECEF;width: 102%;bottom: 0}
.card .item .price{font-size: 30px;color: #000}
.card .contact{background: #F6DBD4;}
.card .item .qrcode{text-align: center;padding: 50px;}
.card .item .qrcode img{width: 120px;}
.card .item .tip{text-align: center}
</style>