<template>
    <div>
        <Header title="我的电影"></Header>
        <router-view></router-view>
        <Toolbar></Toolbar>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Toolbar from "@/components/Toolbar"
    import Login from "@/components/Login"
    export default {
        name: "mine",
        components:{
            Header,
            Toolbar,
            Login
        },


    }
</script>

<style scoped>

</style>