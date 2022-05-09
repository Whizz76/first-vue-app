<template>
<div>
    <p>If someone placed balut on your plate, you might think they were serving you a hardboiled egg. That is, until you cracked it open and a fully intact duck embryo spilled out. Balut, considered a delicacy in many Asian countries, is produced when fertilized duck eggs are placed in warm sunlight. After about eight days, the eggs are held up to the light and checked to ensure that the budding embryo is ready. Then, the eggs are cooked and served with a dash of salt and a few squirts of lemon juice.
</p>
    <router-link :to="{name:'b'}">Where is the sign in button</router-link>
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