<template>
  <div class="alias">
    <h1>{{ msg }}</h1>
    <router-link :to='{name:"AliasParamsShow",params:{to:"AliasOne",from:"AliasParamsShowOne"}}'>GO AliasParamsShowOne</router-link>
    <router-link to='/AliasParamsShow/AliasTwo/AliasParamsShowTwo'>Go ALiasParamsShowTwo</router-link>
    <hr>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'Alias',
  data () {
    return {
      msg: 'This is Alias Component!'
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
