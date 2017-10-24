<template>
  <div class="params">
    <h1>{{ msg }}</h1>
    <hr>
    <router-link :to='{name:"ParamsOne",params:{to:"ParamsOne",from:"Params"}}'>Go ParamsOne</router-link>|
    <router-link to='ParamsTwo/ParamsTwo/Params'>Go ParamsTwo</router-link>  
    <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'Params',
  data () {
    return {
      msg: 'This is Params Component!'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
   console.info('进入: <<'+to.name+">> 组件!")
    next();
  },
  beforeRouteLeave:(to,from,next)=>{
   console.info('离开: <<'+from.name+'>> 组件!')
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
