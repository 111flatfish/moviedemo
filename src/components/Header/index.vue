<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props:{
            title:{
                type:String,
                default:"比目鱼电影"
            }
        }
    }
</script>

<style scoped>
#header{
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: orange;
    border: 1px solid orange;
    border-bottom: none;
    position: relative;
    left: 0;
    top: 0;
}
#header h1{
    font-size: 18px;
    text-align: center;
    font-weight: normal;
    line-height: 50px;
}
#header i{
    position: absolute;
    left: 5px;
    top:50%;
    margin-top: -13px;
    font-size: 26px;
}
</style>