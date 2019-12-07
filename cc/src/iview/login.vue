<template>
    <div class="login">
       <van-notice-bar color="#1989fa"
        background="#ecf9ff"
        left-icon="volume-o">
        {{tongzhi}}
      </van-notice-bar>
         <div class="top">
            <h2>{{time}}</h2>
            <h1>第{{zhou}}周</h1>
         <table class="table">
            <tbody>
                <tr class="active">
                    <td>第一节：</td>
                    <td>{{one}}</td>
                    <td><van-button @click="showPopup(one)" round="true" size="mini" color="linear-gradient(to right, #4bb0ff, rgb(26, 228, 204))">添加作业</van-button></td>
                </tr>
                <tr class="success">
                    <td>第二节：</td>
                    <td>{{two}}</td>
                    <td><van-button @click="showPopup(two)" round="true" size="mini" color="linear-gradient(to right, #4bb0ff, rgb(26, 228, 204))">添加作业</van-button></td>
                </tr>
                <tr  class="warning">
                    <td>第三节：</td>
                    <td>{{three}}</td>
                    <td><van-button @click="showPopup(three)" round="true" size="mini" color="linear-gradient(to right, #4bb0ff, rgb(26, 228, 204))">添加作业</van-button></td>
                </tr>
                <tr  class="danger">
                    <td>第四节：</td>
                    <td>{{four}}</td>
                    <td><van-button @click="showPopup(four)" round="true" size="mini" color="linear-gradient(to right, #4bb0ff, rgb(26, 228, 204))">添加作业</van-button></td>
                </tr>
            </tbody>
        </table>
        <van-popup v-model="show" closeable>
            <div class="showTop">
                <h4>{{time}}</h4>
                <h3>{{name}}</h3>
                <van-cell-group>
                <van-field
                    v-model="message"
                    rows="2"
                    autosize
                    label="作业"
                    type="textarea"
                    maxlength="100"
                    placeholder="请输入本次作业"
                    show-word-limit
                />
                </van-cell-group>
               <van-uploader v-model="fileList" multiple />
                <van-button plain type="info" @click="cunzy" >保存</van-button>
            </div>    
        </van-popup>
        <button @click="tomorrowClass" class="btn btn-primary">明天课程表</button>
        <button @click="todayClass"  class="btn btn-warning">今天课程表</button>
        <a href="http://39.106.173.77">双人在线火拼俄罗斯</a>
         </div>
        <div class="main">
            <iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=2&num=2" 
            width="330" height="70" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
        </div>
        <div class="footer">
            <Tabbar></Tabbar>
        </div>
    </div>
</template>
<script>
import Tabbar from "@/iview/footer.vue"
    export default{
        data(){
            return{
                fileList: [],
                message:"",
                tongzhi:"最近天气转凉请同学们注意保暖！",
                time:0,
                zhou:0,
                one:"没有课开心吧",
                two:"没课你看什么看？",
                three:"还看？",
                four:"看也没课",
                y:0,
                MM:0,
                d:0,
                show: false,
                name:"设置作业"
            }
        },
        components:{
          Tabbar,
        },
        mounted(){
            let date = new Date();
            this.y = date.getFullYear();
            this.MM = date.getMonth() + 1;
            this.d = date.getDate();
            this.zh(this.y,this.MM,this.d);
            this.ke(0);
            this.topTome(0);
        },
        methods:{

            cunzy() {
                this.$toast.success('保存成功');
            },
          showPopup(name) {
                this.show = true;
                this.name = name;
              },
             todayClass() {
                this.one = "没有课开心吧";
                this.two = "没课你看什么看？";
                this.three = "还看？";
                this.four = "看也没课";
                this.zh(this.y,this.MM,this.d);
                this.ke(0);
                this.topTome(0);
            },
            tomorrowClass(){
                this.one = "没有课开心吧";
                this.two = "没课你看什么看？";
                this.three = "还看？";
                this.four = "看也没课";
                this.zh(this.y,this.MM,this.d+1);
                this.ke(1);
                this.topTome(1);
            },
            zh(a,b,c) {
                var date1 = new Date(a, parseInt(b) - 1, c),
                date2 = new Date(a, 0, 1),
                d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
                this.zhou = Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7)-35;
            },
            ke(num) {
                var d = new Date();
                var W =  d.getDay()+num;
                 switch (W) {
                    case 0:
                    W = '天'
                    break
                    case 1:
                    W = '一'; console.log(W)
                     if(this.zhou>=6&&this.zhou<=15){
                        this.one = "计算机组成原理 张欣 2318"
                        if(this.zhou >= 10 && this.zhou <= 13) {
                            this.two = "Android 2608"
                        }else {
                            this.two = "Vue 2610"
                        }
                        if(this.zhou >= 6 && this.zhou <= 13) {
                            this.three = "网络协议 2403 or 机器学习3612";
                        }else {
                             this.three = "网络协议 2403";
                        }
                        if(this.zhou>=6&&this.zhou<=11) {
                              this.four = "编译原理 2302";
                        }else if(this.zhou >= 12 && this.zhou <= 13) {
                            this.four = "软件设计体系结构 2403"
                        }
                    }
                    break;
                    case 2:
                    W = '二';
                     if(this.zhou >= 6 && this.zhou <= 15) {
                        this.one = "Android 于宗凤 2608";
                        this.two = "Vue 李芳莹 2610";
                         if(this.zhou >= 7 && this.zhou <= 14) {
                               this.three = "网络协议 任日鹏 3613(选修课)";
                         }
                        this.four = "计算机组成原理实验 3406A 第二组(双周) 第一组(单周)";
                    }
                    break;
                    case 3:
                    W = '三';
                     if(this.zhou >= 6 && this.zhou <= 15) {
                        this.one = "计算机组成原理 张欣 2302"
                        this.two = "编译原理 2302"
                    }
                    break
                    case 4:
                    W = '四';
                     if(this.zhou >= 6 && this.zhou <= 15) {
                        this.one = "Vue 2610"
                        this.two = "软件设计体系结构 2402"
                            if(this.zhou >= 14 && this.zhou <= 15) {
                                this.three = "软件设计体系结构 3612";
                                if(this.zhou == 14){
                                this.four = "Vue 2610"
                            }
                        }
                        if(this.zhou<14){
                            this.three = "机器学习 3612(选修)";
                        }
                    }
                    break
                    case 5:
                    W = '五'
                    if(this.zhou >= 6 && this.zhou <= 15) {
                        this.one = "算法 2610(单) or 体系结构 3612(双)"
                        this.two = "算法 2303";
                        this.three = "Vue 2610(单) or Android 2608(双)"
                    }
                    break
                    case 6:
                    W = '六'
                    break
                    default:
                    break
                }
            },
             topTome(aa) {
                let date = new Date();
                let y = date.getFullYear();
                let MM = date.getMonth();
                let W = date.getDay()+aa;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate()+aa;
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                let s = date.getSeconds();
                s = s < 10 ? ('0' + s) : s;
                switch (W) {
                    case 0:
                    W = '天'
                    break
                    case 1:
                    W = '一';
                    break;
                    case 2:
                    W = '二';
                    break;
                    case 3:
                    W = '三'
                    break
                    case 4:
                    W = '四'
                    break
                    case 5:
                    W = '五'
                    break
                    case 6:
                    W = '六'
                    break
                    default:
                    break
                }
               this.time =  y + '年' + MM + '月' + (d) + '日  星期' + W ;
              }
        },
    }
</script>
<style scoped>
    .van-notice-bar{
        margin-top: -30px;
    }
    .main{
        margin-top:20px;
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
    }
    .login{
        margin-top:30px; 
        margin-bottom: 50px;
    }
    .van-popup{
        width: 80%;
        height: 80%;
        background: url("../assets/img/bg7.jpg");
        background-size: 100% 100%;
    }
    .showTop{
        margin-top: 20px;
    }
    .box{
      width: 1000px;
      height: 240px;
      margin: 0 auto;
      margin-top: 100px;
      clear: both;
    }
  #btn{
      width: 100px;
      height: 30px;
      margin-left: 600px;
      margin-top: 50px;
  }
  .name{
      width: 100px;
      height: 30px;
      float: left;
      background-color: antiquewhite;
      margin-left: 10px;
      margin-top: 10px;
      text-align: center;
      line-height: 30px;
  }
</style>
