<template>
  <div class="eat">
      <h2>WHAT FOOD DO YOU WANT TO EAT?</h2>
      <div class="box" >
        <div class="name" v-for="(arr, index) in arrs" :key="index" ref="box">{{arr.name}}</div>
      </div>
      <van-button type="info" @click="orderFood">{{btn}}</van-button>
     <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/iview/footer.vue"
export default{
  name:"eat",
  data(){
    return{
        btn:"点饭",
        timeId:"",
        message:"",
        arrs:[
           {name:"小可"},{name:"妈妈的口味菜"},{name:"大盘鸡"},{name:"乐而美"},{name:"美味盖浇饭"},
           {name:"铁板饭"},{name:"水煮房"},{name:"黄焖鸡"},{name:"一河洛面"},{name:"自选"},
           {name:"重庆小吃"},{name:"烤鸭饭"},{name:"咖喱至尊"},{name:"甏肉干饭"},{name:"灌汤包"}
        ]
    }
  },
  components:{
          Tabbar,
   },
   mounted(){

   },
   methods:{
      orderFood(){
        if(this.btn==="点饭"){
                //定时
            this.timeId=setInterval(()=>{
                    //清空所有颜色
                for (var j = 0; j < this.arrs.length; j++) {
                    this.$refs.box[j].style.background="";
                }
                //留下当前颜色
                var random = parseInt(Math.random()*this.arrs.length);
                 this.$refs.box[random].style.background="linear-gradient(to right, #FFFF00, #00FF00)";
            },100);
            this.btn="停止";
        }else{
            //清除计时器
            clearInterval(this.timeId);
            this.btn="点饭";
             for (var j = 0; j < this.arrs.length; j++) {
                   if( this.$refs.box[j].style.background!=""){
                     this.message = this.arrs[j].name;
                          this.$dialog.confirm({
                              title: '点不点？',
                              message: this.arrs[j].name
                            }).then(() => {
                              this.$router.push({name:'shop',params:{num:this.message}}); 
                            }).catch(() => {
                              // on cancel
                           });
                   }
             }
        }
      }
   }
}
</script>

<style scoped>
  .box{
      margin: 0 auto;
      margin-top: 50px;
      flex-direction: row;
      display: flex;
      flex-wrap:wrap;
      justify-content:center;
    }
  .name{
      width: 100px;
      height: 30px;
      float: left;
      background-color: #26a2e0;
      color: #fff;
      border-radius: 5px;
      margin-left: 10px;
      margin-top: 10px;
      text-align: center;
      line-height: 30px;
  }
  .van-button{
    margin-top: 30px;
  }
  .eat{
     padding-top: 1px;
     margin-bottom: 50px;
  }
  h2{
    margin-top: 50px;
    color: aliceblue
  }
</style>
