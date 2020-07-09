<template>
    <div>
<!--        <mt-picker style="width:100%" :solts="backSlots" value-key="text" showToolbar ref="picker" @change="onMyAddressChange"></mt-picker>-->
        <mt-button type="default" style="position: absolute;top:40%;z-index: 100;width: 80%;left: 50%;margin-left:-40%;" @click="showPicker">重新定位</mt-button>
        <mt-picker v-if="isShowPicker" style="width: 100%;position: absolute;top:50%;z-index: 100;background:#fff;" show-toolbar :slots="myAddressSlots" value-key="text"  ref="picker" @change="onMyAddressChange">
            <span @click="cancel"  class="pickerToolbar">取消</span>
            <span @click="changeCity" class="pickerToolbar">确认</span>
        </mt-picker>
            <div class="city_body">
                <Loading v-if="isLoading"></Loading>
                <div  v-else class="city_list">
                    <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul @click="clickHot">
                            <li>北京</li>
                            <li>上海</li>
                            <li>广州</li>
                            <li>深圳</li>
                            <li>重庆</li>
                            <li>河北</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>


</template>

<script>
    import myaddress from "../../../public/lib/address/address.json"
    export default {
        name: "City",
        data(){
          return {
              cityList:[],
              hotCity:[],
              isLoading:false,
              isShowPicker:false,
              city:"",
              myAddressSlots:[
                  {
                      flex:1,
                      defaultIndex:1,
                      values:[],
                      className:"slot1",
                      textAlign:"center"
                  },
                  { divider: true, content: '-', className: 'slot2' },
                  {
                      flex:1,
                      defaultIndex: 1,
                      values:[],
                      className: "slot3",
                      textAlign: "center"
                  }
              ],
          }
        },
        mounted(){
            setTimeout(()=>{
                this.isLoading= false;
            },500);
            this.$nextTick(()=>{
                this.myAddressSlots[0].defaultIndex = 0;
                this.myAddressSlots[2].defaultIndex = 0;
            });
            this.myAddressSlots[0].values = Object.keys(myaddress);
            this.myAddressSlots[2].values = Object.values(myaddress[this.myAddressSlots[0].values[0]]);
        },
        methods:{
            onMyAddressChange(picker,values){
                if(myaddress[values[0]]){
                    picker.setSlotValues(1,Object.values(myaddress[values[0]]));
                    this.city = values[1];
                }
            },
            showPicker(){
                this.isShowPicker = true;
            },
            cancel(){
                this.isShowPicker = false;
            },
            changeCity(){
                this.city = this.formatCity(this.city);
                window.localStorage.setItem("nowCity",this.city);
                this.$store.commit("setcity",this.city);
                this.isShowPicker = false;
                this.$router.push({path:"/movie/Nowplaying"});
            },
            formatCity(city){
                return city.slice(0,city.length-1);
            },
            clickHot(ev){
                window.localStorage.setItem("nowCity",ev.target.innerText);
                this.$store.commit("setcity",ev.target.innerText);
                this.isShowPicker = false;
                this.$router.push({path:"/movie/Nowplaying"});
            }
        }
    }
</script>

<style scoped>
.city_body{
    width: 100%;
    display: flex;
    margin-top:30px;
    position: absolute;
    top:0;
    bottom:0;
}
.city_content{
    width:100%;
}
.city_body .city_list{
    flex: 1;
    overflow: auto;
    background-color: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width: 0;
}
.city_body .city_hot{
    margin-top: 20px;
    text-align: center;
}
.city_body .city_hot h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background-color: #f0f0f0;
    font-weight: normal;
}

.city_body .city_hot ul li{
    float: left;
    background-color: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 12%;
    padding:0 4px;
    border: 1px solid #ccc;
}
.city_body .city_sort div{
    margin-top: 20px;
}
.city_body .city_sort h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background-color: #f0f0f0;
    font-weight: normal;
}
.city_body .city_sort ul{
    padding-left: 10px;
    margin-top: 10px;
}
.city_body .city_sort ul li{
    line-height: 30px;
}
.city_body .city_index{
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #e6e6e6;
}
    .pickerToolbar{
        margin: 10px 20px;
        font-size: 18px;
    }
.pickerToolbar:nth-of-type(1){
    float: left;
}
.pickerToolbar:nth-of-type(2){
    float: right;
}
</style>