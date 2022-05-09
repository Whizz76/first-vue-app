<template>
    <div>
    <p>Please help me. I dont know what is the best way to fix my problem. I cant reproduce and I cant tell more info. Can someone help me asap??? I am in a hurry!!!
</p>
    <router-link :to="{name:'b'}">Where is the sign in button</router-link>
    <router-link :to="{name:'a'}">What is Blaut</router-link>
</div>
<router-view/>
</template>
<style scoped>
a{
    margin:30px 20px 30px 20px ;
    text-decoration: none;
    border: 1px solid blueviolet;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
   
   
}
a:hover{
    background-color: aqua;
}
</style>