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
                  price="2.00"
                  desc="超级大肉超级多"
                  title="特色鸡腿"
                  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                  />
                  <van-card
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="../assets/img/sw2.jpg"
                  />
                    <van-card
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="../assets/img/sw3.jpg"
                  />
                  <van-card
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="../assets/img/sw4.jpg"
                  />
                    <van-card
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="../assets/img/sw6.jpg"
                  />
                   <van-card
                  num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="../assets/img/sw5.jpg"
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
