<template>
    <div class="movie_body">
        <Loading v-if="isLoading"></Loading>
        <Scroller v-else>
            <ul>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_1.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_2.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>毒液：致命守护者</h2>
                        <p>观众评 <span class="grade">9.3</span></p>
                        <p>主演：汤姆·哈迪，米歇尔·威廉姆斯，里兹·阿曼德</p>
                        <p>今天56家影院放映443场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_3.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_1.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_2.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_3.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_3.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_3.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_3.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_pre">预订</div>
                </li>
                <li>
                    <div class="pic_show"><img src="../../../public/images/movie_3.jpg" alt=""></div>
                    <div class="info_list">
                        <h2>无名之辈</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演：陈建斌，任素汐，潘斌龙</p>
                        <p>今天55家影院放映607场</p>
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
                isLoading:true
            }
        },
        mounted(){
            setTimeout(()=>{
                this.isLoading= false;
            },500)

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