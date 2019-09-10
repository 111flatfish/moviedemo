<template>
    <div>
        <Header title="我的电影"></Header>

        <Toolbar></Toolbar>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Toolbar from "@/components/Toolbar"
    export default {
        name: "mine",
        components:{
            Header,
            Toolbar
        },


    }
</script>

<style scoped>

</style>