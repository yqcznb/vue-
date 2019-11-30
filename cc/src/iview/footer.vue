<template>
  <div class="footer">
     <van-tabbar v-model="active" route>
			 <van-tabbar-item icon="label" replace to="/homework">作业</van-tabbar-item>
		   <van-tabbar-item icon="fire" replace to="/">课程表 </van-tabbar-item>
		   <van-tabbar-item icon="thumb-circle" replace to="/eat">点饭</van-tabbar-item>
      </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data(){
	  return{
      active: 1
    }
  },
  mounted(){
    },
  methods:{

  }
}

</script>

<style scoped>
.van-tabbar{
  margin-top:200px;
}
</style>
