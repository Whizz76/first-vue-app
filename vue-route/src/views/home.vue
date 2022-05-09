<template>
<div>
    
    
   <img src="../assets/logo.png">
   <h1>nuxt-Fundamentals</h1>
    <h2>My gnarly Nuxt.js project</h2>
    <router-link to='/a'>What is Balut</router-link>
    <router-link :to="{name:'b'}">Where is the sign in button</router-link>
    <router-link :to="{name:'c'}">How can I fix this problem</router-link>
</div>
<router-view/>
</template>
<style scoped>
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
body{
    font-family: Arial, Helvetica, sans-serif;
}
a{
    margin:30px 20px 30px 20px ;
    text-decoration: none;
    display: inline-block;
    border: 1px solid blueviolet;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
   
   
}
a:hover{
    background-color: aqua;
}
</style>