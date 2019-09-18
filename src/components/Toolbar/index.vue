<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie"><i class="iconfont icon-dianying"></i><p>电影</p></router-link>
            <router-link tag="li" to="/cinema"><i class="iconfont icon-yingyuan"></i><p>影院</p></router-link>
            <router-link tag="li" to="/mine"><i class="iconfont icon-wode"></i><p>我的</p></router-link>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>
#footer{
    width: 100%;
    height: 50px;
    background-color: white;
    border-top: 2px solid #ebe8c3;
    position: fixed;
    left: 0;
    bottom: 0;
}
#footer ul{
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
}
#footer ul li{
    height: 40px;
    flex: 1;
}
#footer ul li.active{
    color:#f0373d;
}
#footer ul li.router-link-active{
    color:#f0373d;
}
#footer ul span{
    font-size: 26px;
}
#footer ul p{
    font-size: 12px;
    height: 18px;
}
</style>