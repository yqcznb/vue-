<template>
  <div class="homework">
      <div class="hh3">在这里查看本周和上周作业</div>
         <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"    
          >
          <van-cell
              v-for="(item,index) in list"
              :key="index"
              :title="item"
              @click="showPopup(item,index)"
            />
        </van-list>
        <van-popup v-model="show" closeable>
          <h4>{{item}}</h4>
           <van-cell-group>
              <van-field
                v-model="message"
                rows="2"
                autosize
                label="作业内容:"
                type="textarea"
                maxlength="100"
                placeholder="请输入留言"
                show-word-limit
              />
            </van-cell-group>
        </van-popup>
       <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/iview/footer.vue"
export default {
    name:"homework",
    data(){
      return{
          message:"",
          show: false,
          list: [],
          loading: false,
          finished: false,
          activeName: '0',
          keChen:"",
          neiRong:"",
          data:[],
          item:""
        }
    },
  components:{
    Tabbar
  },
  mounted(){
    this.aa()
  },
  methods:{
    showPopup(item,index) {
      this.show = true;
      this.item = item;
      this.message = this.data[index].company
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.data[i].title+" "+this.data[i].attention_degree);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    },
    aa(){
       var loginMode = 'msdk';//游戏内默认msdk(wx|qq|msdk)
          var url = '/data/index';
          this.axios.get(url)
            .then(response => {
              console.log(response.data),
                  this.data=response.data.data
            })
            .catch(error => {
              
            })
    }
  }
}
</script>

<style scoped>
.homework{
  padding-top: 1px;
  margin-bottom: 50px;
}
.van-popup{
  width: 80%;
  height: 80%;
  background: url("../assets/img/bg7.jpg");
  background-size: 100% 100%;
}
.van-popup h4{
  margin-top: 50px;
}
.hh3{
  margin-top: 5px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}
</style>
