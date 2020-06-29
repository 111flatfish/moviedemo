<template>
    <div>
        <Header title="个人中心"></Header>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand_swtich">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
        </div>
        <CList></CList>
        <Toolbar></Toolbar>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Toolbar from "@/components/Toolbar"
    import CList from "@/components/CList"
    export default {
        name: "cinema",
        components:{
            Header,
            Toolbar,
            CList
        },

    }
</script>

<style scoped>
    #content{
        margin-bottom:0;
    }
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>