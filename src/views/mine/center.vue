<template>
    <div class="center-body">
        <div class="center-info" style="margin-top:30px">
            <div class="center-info_img"><img src="../../assets/headimg.jpg" alt=""></div>
            <div class="center-info-name">{{$store.state.user.name}}</div>
        </div>
        <div class="center-menu">
            <!-- 优惠券单元格 -->
            <van-coupon-cell
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    @click="showList = true"
            />
            <!-- 优惠券列表 -->
            <van-popup
                    v-model="showList"
                    round
                    position="bottom"
                    style="height: 90%; padding-top: 4px;"
            >
                <van-coupon-list
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        :disabled-coupons="disabledCoupons"
                        @change="onChange"
                        @exchange="onExchange"
                />
            </van-popup>
            <van-button type="danger" block round @click="handleToLogout" style="margin-top:10px">退出</van-button>
        </div>
    </div>
</template>

<script>
    import {messageBox} from "@/components/Location/index.js"
    import axios from "axios"
    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
    };
    export default {
        name: "center",
        data(){
          return {
              chosenCoupon: -1,
              coupons: [coupon],
              disabledCoupons: [coupon],
              showList:false
          }
        },
        methods:{
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            },
            handleToLogout(){
                let that = this;
                messageBox({
                    title:"退出账号",
                    content:"是否退出该账号？",
                    ok:"确认",
                    cancel:"取消",
                    handleOk(){
                        that.axios.get("/api/logout").then(res=>{
                            if(res.data.status == 0){
                                that.$router.push({path:"/mine/login"});
                                that.$store.commit("User_Info",{name:''});
                            }else {
                                alert("退出失败")
                            }
                        });
                    },
                    handleCancel(){
                    }
                });
            }
        },
        beforeRouteEnter(to,from,next){
            axios.get("/api/getUser").then(res=>{
                let data = res.data;
                if(data.stauts === 0){
                    next(vm=>{
                        vm.$store.commit("User_Info",{name:data.username});
                    });
                }else{
                    next("/mine/login");
                }
            });
        }
    }
</script>

<style scoped>
    .center-body{
        background: #f7f8fa;
        position:absolute;
        top:50px;
        bottom:0;
        width: 100%;
    }
    .center-info-name{
        margin:0 auto;
        text-align:center;
        font-size: 24px;
        margin-top:20px;
    }
.center-info_img img{
    width: 80px;
    height: 80px;
    margin:0 auto;
    border-radius:50%;
}
    .center-menu{
        margin-top:30px;
    }
</style>