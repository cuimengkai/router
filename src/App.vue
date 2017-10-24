<template>
  <div id="app">
    <h3>Router Example</h3>
    <h4>
      <button v-bind:style="pre" v-on:click="prePage">pre page</button>
      <button v-bind:style="next" @click="nextPage">next page</button>
    </h4><br>
    <hr>
      <router-link :to='{name:"Home"}'>Go Home</router-link>|
      <router-link to='/Url'>Go Url</router-link>|
      <router-link :to='{name:"Parent"}'>Go Parent</router-link>|
      <router-link :to='{name:"Params"}'>Go Params</router-link>|
      <router-link :to='{name:"Redirect"}'>Go Redirect</router-link>|
      <router-link to='/AliasShow'>Go Alias</router-link>|
      <router-link :to='{name:"AliasParamsShow",params:{to:"App",from:"AlliasParamsShow"}}'>Go AliasParamsShow</router-link>|
      <a href="" v-on:click="goHome">Go Home</a>|
      <a href="" v-on:click="goParams">Go ParamsRouter</a>
    <hr>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <hr>
  <h3 v-text="message"></h3>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      message: '',
      pre:'float:left;',
      next:'float:right;'
    }
  },
  methods:{
    prePage(){
      this.$router.go(-1);
    },
    nextPage(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/Home")
    },
    goParams(){
      this.$router.push({name:"AliasParamsShow",params:{to:"GOParamsRouter",from:"AliasParamsShow"}});
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
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
