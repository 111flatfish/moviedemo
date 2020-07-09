<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-search" @click="search" ></i>
                <input type="text" v-model="inputVal" @keydown.enter="search" @change="search">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <Loading v-if="isloading"></Loading>
            <ul>
                <li v-for="item in movies">
                    <div class="img"><img :src="item.images.large" alt=""></div>
                    <div class="info">
                        <p class="title">{{item.title}}</p>
                        <p>评分 <span style="font-size: 16px;color:#faaf00;margin-left:10px">{{item.rating.average}}</span></p>
                        <p>{{item.genres|nameFormat}}</p>
                        <p>导演 {{item.directors[0].name}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
          return {
              inputVal:"",
              movies:[],
              timer:null,
              isloading:false
          }
        },
        methods:{
            search(){
                let that = this;
                this.isloading = true;
                clearTimeout(this.timer);
                this.timer =  setTimeout(()=>{
                    that.axios.get(`http://106.55.12.204/search?key=${that.inputVal}`).then(res=>{
                        if(res.data.subjects){
                            that.movies = res.data.subjects;
                            that.isloading = false;
                        }
                    });
                },300)
            }
        },
        filters:{
            nameFormat(val){
                return val.join("、");
            }
        }
    }
</script>

<style scoped>
.search_body{
    flex: 1;
    overflow: auto;
}
.search_body .search_input{
    padding:8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
}
.search_body .search_input_wrapper{
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    display: flex;
    line-height: 15px;
}
.search_body .search_input_wrapper i{
    font-size: 16px;
    padding:4px 0;
}
.search_body .search_input_wrapper input{
    border: none;
    font-size: 13px;
    color: #333;
    padding:4px 0;
    outline: none;
    width: 100%;
    margin-left: 5px;
}
.search_body .search_result h3{
    font-size: 15px;
    color: #999;
    padding:9px 15px;
    border-bottom: 1px solid #e6e6e6;
}
.search_body .search_result ul li{
    display: flex;
    border-bottom:1px dashed #c9c9c9 ;
    padding:10px 15px;
    box-sizing: border-box;
}
.search_body .search_result img{
    width: 60px;
    float: left;
}
.search_body .search_result .info{
    float: left;
    margin-left: 15px;
    /*flex: 1;*/
    width: 80%;
}
.search_body .search_result .info p{
    height: 22px;
    /*display: flex;*/
    line-height: 22px;
    font-size: 12px;
}
.search_body .search_result .info p span{
    margin:0 10px 0 0;
}
.search_body .search_result .info .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break:keep-all;
    font-size: 18px;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){
    flex: 1;
    font-size: 18px;
}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){
    font-size: 16px;
    color:#fc7103;
}
</style>