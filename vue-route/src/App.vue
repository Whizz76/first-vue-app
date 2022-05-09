<template>
<div>
  <h3>Nuxt Fundamentals</h3>
    <p>A Vue School Course</p>
    <router-link :to="{name:'home'}" id="home">Home</router-link>
    <br>
  
</div>
<router-view/>
</template>
<script>
import home from '../src/views/home.vue'
export default {
  components:{ home }
}
</script>

<style>
p{
  margin: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#home{
    margin:30px 20px 30px 20px ;
    text-decoration: none;
    border: 1px solid blueviolet;
    background-color: blueviolet;
    color: white;
    display: inline-block;
    font-weight: 600;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
   
   
}
#home:hover{
    background-color: white;
    color: blueviolet;
}

</style>
