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
        <van-tab title="点餐">
            <!-- 格子布局划分侧栏 -->
           <van-row>
            <van-col span="5">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                    <van-sidebar-item title="标签名称" />
                   
                </van-sidebar>
            </van-col>
            <van-col span="19">
                <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                />
                <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                />
            </van-col>
          </van-row>
        </van-tab>
        <van-tab title="评价">内容 2

        </van-tab>
        <van-tab title="商家">内容 3

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
       activeKey: 0
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
  
</style>
