<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/img/bg7.jpg");
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  /* position: fixed;
  overflow:scroll; */
}

</style>
