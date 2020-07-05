<template>
    <div id="main">
        <Header title="比目鱼电影"></Header>
        <div id="content">
            <div class="movie_menu">
                <router-link to="/movie/City" tag="div" class="city_name">
                    <span>{{$store.state.city.nowCity}}</span><i class="iconfont icon-city"></i>
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
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Toolbar from "@/components/Toolbar"
    import {messageBox} from "@/components/Location/index.js"
    export default {
        name: "movie",
        components:{
            Header,
            Toolbar
        },
        mounted(){

            messageBox({
                title:"定位",
                city:"广州",
                cancel:"取消",
                ok:"切换",
                handleOk:()=>{
                    console.log("切换");
                    window.localStorage.setItem("nowCity","广州");
                    this.$store.commit("setcity","广州");
                },
                handleCancel:function () {
                    console.log("取消");
                }
            });
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
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
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