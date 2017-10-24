<template>
  <div class="aliasparams">
    <h1>{{ msg }}</h1>
    <hr>
    <h4>to : {{$route.params.to}}</h4>
    <h4>from : {{$route.params.from}}</h4>
  </div>
</template>

<script>
export default {
  name: 'AliasParams',
  data () {
    return {
      msg: 'This is AliasParams Component!'
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
