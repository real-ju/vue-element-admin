<style lang="less" scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box {
        width: 25%;
        border: 1px solid #eee;
        border-radius: 6px;
        padding: 40px 30px;

        .title {
            width: 100%;
            text-align: center;
            color: #42b983;
            font-size: 20px;
            font-weight: bold;
        }

        .login-form {
            margin-top: 20px;
        }
    }
}
</style>

<template>
    <div class="container login-page">
        <div class="login-box">
            <div class="title">Admin</div>
            <el-form class="login-form" ref="form" :model="form" :rules="formRules" label-width="70px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" @keyup.enter.native="submit"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain @click="submit">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            formRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                if(valid) {
                    this.$store.dispatch('auth/login', {
                        ...this.form
                    })
                    .then(res => {
                        this.$router.push('/admin').catch(() => {});
                    })
                    .catch(res => {
                        this.$message.error(res.data.msg);
                    })
                }
            })
        }
    }
}
</script>