<template>
    <div class="movie_body">
        <Loading v-if="isLoading"></Loading>
        <Scroller v-else :handleToTop="handleToTop" :handleToEnd="handleToEnd">
            <ul>
                <li class="showMsg">{{topMsg}}</li>
                <li v-for="item in movies">
                    <div class="pic_show" @tap="toDetail(item.id)" @click="toDetail(item.id)"><img :src="item.images.small" :alt="item.alt"></div>
                    <div class="info_list">
                        <h2 @tap="toDetail(item.id)" @click="toDetail(item.id)">{{item.title}}</h2>
                        <p>观众评 <span class="grade">{{item.rating.average}}</span></p>
                        <p>主演 <span v-for="item2 in item.casts">{{item2.name}}</span></p>
                        <p>上映时间 {{item.pubdates[1]}}</p>
                    </div>
                    <div class="btn_mall">购票</div>
                </li>
<!--                <li>-->
<!--                    <div class="pic_show" @tap="toDetail"><img src="../../../public/images/movie_1.jpg" alt=""></div>-->
<!--                    <div class="info_list">-->
<!--                        <h2 @tap="toDetail">无名之辈</h2>-->
<!--                        <p>观众评 <span class="grade">9.2</span></p>-->
<!--                        <p>主演：陈建斌，任素汐，潘斌龙</p>-->
<!--                        <p>今天55家影院放映607场</p>-->
<!--                    </div>-->
<!--                    <div class="btn_mall">购票</div>-->
<!--                </li>-->
            </ul>
        </Scroller>
    </div>
</template>

<script>
    export default {
        name: "Nowplaying",
        data(){
          return {
              topMsg:"",
              showTopMsg:false,
              isLoading:true,
              movies:[],
              nowCity:''
          }
        },
        mounted() {
            let that = this;
            this.nowCity = this.$store.state.city.nowCity;
            $.ajax({
                type:"get",
                url:`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10&city=${this.$store.state.city.nowCity}`,
                dataType:"jsonp",
                success:function (data) {
                    that.movies = data.subjects;
                    console.log(data);
                    that.isLoading= false;
                }
            });
        },
        activated(){
            let that = this;
            if(this.nowCity === this.$store.state.city.nowCity){
                return;
            }
            this.isLoading = true;
            $.ajax({
                type:"get",
                url:`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10&city=${this.$store.state.city.nowCity}`,
                dataType:"jsonp",
                success:function (data) {
                    that.movies = data.subjects;
                    console.log(data);
                    that.isLoading= false;
                }
            });
        },
        methods:{
            handleToTop(pos){
                if(pos.y > 30){
                    this.topMsg = "正在更新中..."
                }
            },
            handleToEnd(pos){
                if(pos.y > 30){
                    this.topMsg = "更新完成!"
                    setTimeout(()=>{
                        this.topMsg = ""
                    },1000);
                }
            },
            toDetail(id){
                this.$router.push("/movie/detail/1/"+id);
            }
        }
    }
</script>

<style scoped>
    #content .movie_body{ flex:1; overflow:auto;}
    .movie_body ul{ margin:0 12px; }
    .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
    .movie_body .pic_show{ width:64px; height: 90px;}
    .movie_body .pic_show img{ width:100%;}
    .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
    .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
    .movie_body .info_list p span{margin:0 10px 0 0}
    .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
    .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
    .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
    .movie_body .btn_pre{ background-color: #3c9fe6;}
    .movie_body .pullDown{ margin:0; padding:0; border:none;}
    .movie_body .showMsg{
        margin:0;
        border:none;
        text-align:center;
        padding:0;
        justify-content:center;
    }
</style>