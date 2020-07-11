<template>
    <div class="findpassword_body">
        <van-form @submit="handleFindPassword">
            <van-field
                    v-model="email"
                    name="邮箱地址"
                    label="邮箱地址"
                    placeholder="邮箱地址"
                    :rules="[{ required: true, message: '请填写邮箱地址' }]"
            />
            <van-field
                    v-model="passward"
                    type="password"
                    name="新密码"
                    label="新密码"
                    placeholder="新密码"
                    :rules="[{ required: true, message: '请填写新密码' }]"
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
        <div class="findpassword_link">
            <router-link to="/mine/findpassword">立即注册</router-link>
            <router-link to="/mine/login">立即登录</router-link>
        </div>
    </div>
</template>

<script>
    import {messageBox} from "@/components/Location/index.js"
    export default {
        name: "index",
        data(){
            return {
                email:'',
                passward:'',
                verify:""
            }
        },
        methods:{
            handleFindPassword(){
                let that = this;
                this.axios.post("/api/findpassword",{
                    email:this.email,
                    passward:this.passward,
                    verify:this.verify
                }).then(res=>{
                    if(res.data.status === 0){
                        messageBox({
                            title:"提示",
                            content:"修改密码成功！",
                            ok:"确认",
                            handleOk(){
                                that.$router.push({path:"/mine/login"});
                            }
                        });
                    }else {
                        messageBox({
                            title:"提示",
                            content:"修改密码失败！",
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
    .findpassword_body .findpassword_link{ display: flex; justify-content:space-between;}
    .findpassword_body .findpassword_link a{ text-decoration: none; margin:0 10px; font-size: 16px; color:#e54847;}
</style>