let state = function () {
    return {
        name:""
    }
}
let mutations = {
    User_Info(state,param){
        state.name = param.name
    }
}

 export default {
    state,
    mutations
}