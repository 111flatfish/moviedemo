<template>
    <div class="register_body">
        <van-form @submit="handleRegister">
            <van-field
                    v-model="email"
                    name="邮箱地址"
                    label="邮箱地址"
                    placeholder="邮箱地址"
                    :rules="[{ required: true, message: '请填写邮箱地址' }]"
            />
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
            />
            <van-field
                    v-model="passward"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                    v-model="verify"
                    center
                    clearable
                    label="邮箱验证码"
                    placeholder="请输入邮箱验证码"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="handleVerify">发送验证码</van-button>
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
        <div class="register_link">
            <router-link to="/mine/login">立即登录</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
    import {messageBox} from "@/components/Location/index.js"
    export default {
        name: "index",
        data(){
            return {
                username:"",
                passward:"",
                verify:"",
                email:""
            }
        },
        methods:{
            handleRegister(values){
                let that = this;
                this.axios.post("/api/register",{
                    email:this.email,
                    verify:this.verify,
                    username:this.username,
                    passward:this.passward
                }).then(res=>{
                    console.log(res.data);
                    if(res.data.status === 0){
                        messageBox({
                            title:"提示",
                            content:"用户注册成功",
                            ok:"确认",
                            handleOk(){
                                that.$router.push({path:"/mine/login"});
                            }
                        });
                    }else if(res.data.status === -1){
                        messageBox({
                        title:"提示",
                        content:"邮箱或验证码出错",
                        ok:"确认"
                    });
                    }else if(res.data.status === -2){
                        messageBox({
                            title:"提示",
                            content:"注册失败，已有用户",
                            ok:"确认"
                        });
                    }
                });
            },
            handleVerify(){
                if(this.email){
                    this.axios.get('/api/verify?email='+this.email).then(res=>{
                        console.log(res);
                    });
                }else {
                    messageBox({
                        title:"提示",
                        content:"请先输入邮箱地址",
                        ok:"确认"
                    });
                }

            }
        }
    }
</script>

<style scoped>
    .register_body .register_link{ display: flex; justify-content:space-between;}
    .register_body .register_link a{ text-decoration: none; margin:0 10px; font-size: 16px; color:#e54847;}
</style>