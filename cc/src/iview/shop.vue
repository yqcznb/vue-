<template>
  <div class="shop">
      <van-nav-bar
        :title="shopname"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        {{this.$route.params.num}}
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
  </div>
</template>

<script>
export default{
  name:"shop",
  data(){
    return{
       shopname:""
    }
  },
  components:{
         
   },
   mounted(){
    
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
