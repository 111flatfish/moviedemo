<template>
    <div id="detailContainer" class="slideToDetail">
        <Header title="影片详情">
            <i class="iconfont icon-arrow_left" @touchstart="back"></i>
        </Header>
        <Loading v-if="isloading"></Loading>
        <div id="content" class="contentDetail" v-else>
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img v-bind:src="movieData.images.small" alt="电影封面">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{movieData.title}}</h2>
                        <p>{{movieData.original_title}}</p>
                        <p>{{movieData.rating.average}}</p>
                        <p>{{movieData.genres|nameFormat}}</p>
                        <p>{{movieData.countries[0]}}/{{movieData.durations[0]}}</p>
                        <p>{{movieData.mainland_pubdate}}大陆上映</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
               <p style="margin:10px">简介：{{movieData.summary}}</p>
            </div>
            <div class="detail_player">
                <p>剧照</p>
                <ul>
                    <li class="sliper-slipe" v-for="item in movieData.photos">
                        <div><img :src="item.thumb" alt=""></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    export default {
        name: "detail",
        data(){
            return{
                isloading:true,
                movieData:{},
            }
        },
        components:{
            Header
        },
        props:["id"],
        mounted(){
            var that = this;
            $.ajax({
                type:"get",
                url:`https://api.douban.com/v2/movie/subject/${that.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
                dataType:"jsonp",
                async:false,
                jsonp:"callback",
                jsonpCallback:"callback",
                success:function(data){
                    if(data){
                        that.movieData = data;
                        that.isloading = false;
                    }
                }
            });


        },
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
#detailContainer{
    width:100%;
    min-height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:100;
    background:white;
}
.slideToDetail{
    animation:.3s slideDetail;
}
@keyframes slideDetail{
    0%{
        transform:translateX(100%);
    }
    100%{
        transform:translateX(0);
    }
}
    .contentDetail{
        display:block;
        margin-bottom:0;
    }
    .detail_list{
        height: 200px;
        width:100%;
        position:relative;
        overflow:hidden;
    }
    .detail_list_bg{
        width:100%;
        height:100%;
        background:url("../../../public/images/movie_1.jpg") 0 40%;
        filter:blur(20px);
        background-size:cover;
        position:absolute;
        left:0;
        top:0;
    }
    .detail_list_filter{
        width:100%;
        height:100%;
        position:absolute;
        background:#40454d;
        opacity:.55;
        z-index:1;
    }
    .detail_list_content{
        display:flex;
        width:100%;
        position:absolute;
        height:100%;
        left:0;
        top:0;
        z-index:2;
    }
    .detail_list_img{
        width:108px;
        height:150px;
        border:1px solid #f0f2f3;
        margin: 20px;
    }
    .detail_list_img img{
        width:100%;
        height:100%;
    }
    .detail_list_info{
        margin-top:20px;
    }
    .detail_list_info h2{
        font-size: 20px;
        color:white;
        font-weight:normal;
        line-height:40px;
    }
    .detail_list_info p{
        line-height: 20px;
        font-size:14px;
        color:#ccc;
    }
#content .detail_player{ margin:20px;}
.detail_player .sliper-slipe{text-align: center; font-size: 14px;display: block;width: 100%;margin-top:10px}
.detail_player .sliper-slipe img{ width:100%; margin-bottom: 5px;}
.detail_player .sliper-slipe p:nth-of-type(2){ color:#999;}
</style>