export default {
    state(){
        return {
            nowCity:window.localStorage.getItem("nowCity")||"大连",
            nowId:""
        }
    },
    mutations:{
        setcity(state,city,id){
            state.nowCity = city;
            state.nowId = id;
        }
    }
}