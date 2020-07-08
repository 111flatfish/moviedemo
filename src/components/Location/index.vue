<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{city}}</p>
        <div>
            <p @touchstart="handleOk">{{ok}}</p>
            <p @touchstart="handleCancel">{{cancel}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.messageBox{
    width:200px;
    height:120px;
    background:white;
    box-shadow:3px 3px 3px 3px #ccc;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-60px;
    font-size:18px;
    border-radius:4px;
    z-index: 200;
}
    .messageBox h1{
        font-size: 18px;
    }
    .messageBox h2,p{
        color:#000;
        text-align:center;
        margin:0 auto;
        line-height:40px;
    }
    .messageBox div{
        display:flex;
        justify-content:center;
        border-top:1px solid #ccc;
        position:absolute;
        bottom:0;
        width:100%;
    }
    .messageBox p{
        flex:1;
        text-align:center;
        line-height:30px;

    }
    .messageBox div p:nth-child(1){
        border-right:1px solid #ccc;
    }
</style>