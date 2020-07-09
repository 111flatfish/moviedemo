<template>
    <div id="main">
        <Header title="比目鱼电影"></Header>
        <div id="content">
            <div class="movie_menu" ref="test">
                <router-link to="/movie/City" tag="div" class="city_name">
                    <span>{{$store.state.city.nowCity}}</span><i class="iconfont icon-show_more"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link to="/movie/Nowplaying" tag="div" class="hot_item active">正在热映</router-link>
                    <router-link to="/movie/ComingSoon" tag="div"  class="hot_item">即将上映</router-link>
                </div>
                <router-link to="/movie/Search" tag="div" class="search_entry">
                    <i class="iconfont icon-search"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <Toolbar></Toolbar>
        <router-view name="detail"></router-view>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Toolbar from "@/components/Toolbar"
    import {messageBox} from "@/components/Location/index.js"
    export default {
        name: "movie",
        data(){
          return {
              city:{}
          }
        },
        components:{
            Header,
            Toolbar
        },
        methods:{
          formatCity(city){
              let index = city.indexOf("省");
              if(index){
                  return city.slice(index+1,city.length-1);
              }else {
                  return city.slice(0,city.length-1);
              }
          }
        },
        mounted(){
            console.log(this.$refs.test);

            $.ajax({
                    type:"get",
                    url:`http://pv.sohu.com/cityjson`,
                    dataType:"jsonp",
                    async:false,
                    jsonp:"callback",
                    jsonpCallback:"callback",
                    success:function(data){
                    }
            });
            setTimeout(()=>{
                this.$nextTick(()=>{
                    this.city = returnCitySN;
                    let city = this.formatCity(this.city.cname);
                    this.city.cname = city;
                    if(this.city.cname == window.localStorage.getItem("nowCity")){
                        return;
                    }else {
                        if(this.city.cname == "CHIN"){
                            messageBox({
                                title:"定位",
                                city:`定位失败`,
                                cancel:"取消",
                                ok:"切换",
                                handleOk:()=>{
                                    console.log("切换");
                                },
                                handleCancel:function () {
                                    console.log("取消");
                                }
                            });
                        }else {
                            messageBox({
                                title:"定位",
                                city:`${this.city.cname}`,
                                cancel:"取消",
                                ok:"切换",
                                handleOk:()=>{
                                    console.log("切换");
                                    window.localStorage.setItem("nowCity",this.city.cname);
                                    this.$store.commit("setcity",this.city.cname);
                                    window.location.reload();
                                },
                                handleCancel:function () {
                                    console.log("取消");
                                }
                            });
                        }
                    }
                });
            },1000)

        }
    }
</script>

<style scoped>
    #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
    .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
    .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
    .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
    /*.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}*/
    .movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 55px;}
    .movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry i{  font-size:24px; color:red;}

    .slide-enter-active{ animation : 13s detailMove;}
    @keyframes detailMove{
        0%{
            transform : translateX(100%);
        }
        100%{
            transform : translateX(0);
        }
    }
</style>