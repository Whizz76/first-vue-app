<template>
   <div>
    <p>I've stalked the forum for a while, reading everything closely, but today I decided that it was time to register as a user. So I did, this morning! But now, when I came back to the forum, I cannot seem to find the damn sign in button? WHERE IS IT???!??</p>
    <router-link :to="{name:'a'}">What is Blaut</router-link>
    <router-link :to="{name:'c'}">How can I fix this problem</router-link>
</div>
<router-view/>
</template>
<style scoped>
a{
    margin:30px 20px 30px 20px ;
    text-decoration: none;
    border: 1px solid blueviolet;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
   
   
}
a:hover{
    background-color: aqua;
}
</style>