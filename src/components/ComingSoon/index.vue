<template>
    <div class="movie_body">
        <Loading v-if="isLoading"></Loading>
        <Scroller v-else>
            <ul>
                <li v-for="item in movies">
                    <div class="pic_show" @tap="toDetail"><img :src="item.images.small" alt=""></div>
                    <div class="info_list">
                        <h2 @tap="toDetail">{{item.title}}</h2>
                        <p>观众评 <span class="grade">{{item.rating.average}}</span></p>
                        <p>主演：<span v-for="item2 in item.casts">{{item2.name}}</span></p>
                        <p>预定人数 {{item.collect_count}}</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
    export default {
        name: "CommingSoon",
        data(){
            return {
                isLoading:true,
                movies:[]
            }
        },
        mounted(){
            let that = this;
            $.ajax({
                type:"get",
                url:`https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a`,
                dataType:"jsonp",
                success:function (data) {
                    that.movies = data.subjects;
                    that.isLoading= false;
                }
            });

        },
        methods:{
            toDetail(){
                this.$router.push("/movie/detail/2");
            }
        }
    }
</script>

<style scoped>
    .movie_body{
        flex: 1;
        overflow: auto;
    }
    .movie_body ul{
        margin: 0 12px;
        overflow: hidden;

    }
    .movie_body ul li{
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 10px;
    }
    .movie_body .pic_show{
        width: 64px;
        height: 90px;
    }
    .movie_body .pic_show img{
        width: 100%;
    }
    .movie_body .info_list{
        margin-left: 12px;
        flex: 1;
        position: relative;
    }
    .movie_body .info_list h2{
        font-size: 17px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie_body .info_list p{
        font-size: 13px;
        line-height: 22px;
        width: 200px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie_body .info_list p span{
        margin:0 10px 0 0;
    }
    .movie_body .info_list .grade{
        font-size: 15px;
        font-weight: 700;
        color: #faaf00;
    }
    .movie_body .info_list img{
        width: 50px;
        position: absolute;
        right:10px;
        top:5px;
    }
    .movie_body .btn_mall,.movie_body .btn_pre{
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #ef4238;
        color: #FFF;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
    }
    .movie_body .btn_pre{
        background-color: #0086b3;
    }
</style>