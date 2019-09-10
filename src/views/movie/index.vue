<template>
    <div>
        <Header></Header>

        <Toolbar></Toolbar>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Toolbar from "@/components/Toolbar"
    export default {
        name: "movie",
        components:{
            Header,
            Toolbar
        }
    }
</script>

<style scoped>

</style>