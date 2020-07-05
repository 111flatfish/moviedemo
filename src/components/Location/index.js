import Vue from "vue"
import location from "./index.vue"

export let messageBox = (function(){
    let defaults ={
        title:"",
        city:"",
        cancel:"",
        ok:"",
        handleOk:null,
        handleCancel:null
    }
    return function (opts) {
        for(let keys in defaults){
            defaults[keys] = opts[keys];
        }
        let Messagebox =  Vue.extend(location);
        let vm = new Messagebox({
            el:document.createElement("div"),
            data(){
                return {
                    title:defaults.title,
                    city:defaults.city,
                    cancel:defaults.cancel,
                    ok:defaults.ok
                }
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel&&defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk&&defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    }
})();
