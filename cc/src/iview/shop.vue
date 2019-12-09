<template>
  <div class="shop">
      <van-nav-bar
        :title="shopname"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    
    <van-tabs v-model="active">
        <van-tab title="点餐" class="wushi">
            <!-- 格子布局划分侧栏 -->
           <van-row>
            <van-col span="5">
                  <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="青岛" />
                    <van-sidebar-item title="工学院" />
                    <van-sidebar-item title="最好" />
                    <van-sidebar-item title="吃的" />
                    <van-sidebar-item title="一家" />
                    <van-sidebar-item title="餐厅" />
                    <van-sidebar-item title="黄金文" />
                    <van-sidebar-item title="大厨" />
               </van-sidebar>   
            </van-col>
            <van-col span="19">
                  <van-card
                  num="2"
                  price="9.00"
                  desc="超级大肉超级多"
                  title="特色鸡腿"
                  thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1867297350,551105050&fm=26&gp=0.jpg"
                  />
                  <van-card
                  num="2"
                  price="5.00"
                  desc="有家的味道"
                  title="月圆月饼"
                  thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3603293073,2335666727&fm=26&gp=0.jpg"
                  />
                    <van-card
                  num="2"
                  price="8.00"
                  desc="超香超有嚼劲"
                  title="澳洲腊肉"
                  thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3335325514,1395789076&fm=26&gp=0.jpg"
                  />
                  <van-card
                  num="2"
                  price="10.00"
                  desc="全校最实惠"
                  title="巨无霸汉堡"
                  thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1729239799,2817055105&fm=26&gp=0.jpg"
                  />
                    <van-card
                  num="2"
                  price="7.00"
                  desc="提升你的幸福度"
                  title="饭后甜点"
                  thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2636216160,1652126445&fm=26&gp=0.jpg"
                  />
                   <van-card
                  num="2"
                  price="6.00"
                  desc="咬一口爽到离谱"
                  title="绝味鸡翅"
                  thumb="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=242186523,2926403330&fm=26&gp=0.jpg"
                  />
             
            </van-col>
          </van-row>
           <van-goods-action>
              <van-goods-action-icon icon="chat-o" text="客服" info="5" />
              <van-goods-action-icon icon="shop-o" text="店铺" info="7" />
              <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
              <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
          </van-goods-action>
        </van-tab>
        <van-tab  title="评价">
          <div class="pf"> 
            <!-- 背景图片 -->
          </div>
          <img src="../assets/img/pp1.jpg" alt="商家评论">
          <img src="../assets/img/pp2.jpg" alt="商家评论">
          <img src="../assets/img/pp3.jpg" alt="商家评论">
        </van-tab>
        <van-tab title="商家">
             <img src="../assets/img/sjxx.jpg" alt="商家评论">
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default{
  name:"shop",
  data(){
    return{
       shopname:"",
       activeKey: 0,
       loading: false

    }
  },
  components:{
         
   },
   mounted(){
    this.shopname = this.$route.params.num
   },
   methods:{
      onClickLeft() {
      this.$router.go(-1);
    },
   }
}
</script>

<style scoped>
.van-goods-action{
  margin:0;
}
.wushi{
   margin-bottom: 49px;
    background: #fafafa;
}
img{
  width: 100%;
  height: auto;
}
  .van-sidebar {
    width: 100%;
  }
  .van-col{
     background: #fafafa;
  }
  .pf{
    width: 100%;
    height: 220px;
    background: url("../assets/img/pl.jpg");
    background-size: 100% 220px;
  }
</style>
