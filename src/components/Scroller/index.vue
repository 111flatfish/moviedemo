<template>
    <div ref="wrapper" class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import Scroller from "better-scroll"
    export default {
        name: "index",
        data(){
            return {
                scroll:null
            }
        },
        props:{
          handleToTop:{
              type:Function,
              default:function () {
              }
          },
            handleToEnd:{
              type:Function,
                default:function () {
                }
            }
        },
        mounted() {
            let scroller = new Scroller(this.$refs.wrapper,{
                tap:true,
                probeType:1
            });
            this.scroll = scroller;
            scroller.on("scroll",(pos)=>{
                console.log("scroll");
                console.log(this.handleToTop);
                this.handleToTop(pos);
            });
            scroller.on("touchEnd",(pos)=>{
                console.log("end");
                this.handleToEnd(pos);
            });
        },
        methods:{
            toScrollTop(y){
            }
        }
    }
</script>

<style scoped>
.wrapper{
    height: 100%;
    width:100%;
}
</style>