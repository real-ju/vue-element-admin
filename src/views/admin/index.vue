<style lang="less" scoped>
.admin-page {
    display: flex;
}

.aside {
    width: 250px;
    height: 100%;
    flex: none;
    background-color: #263238;

    .logo {
        width: 100%;
        height: 60px;
        color: #42b983;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        i {
            margin-left: 10px;
        }
    }
    
    .menu {
        width: 100%;
        box-sizing: unset;
    }
}

.collapse-aside {
    width: 64px;
}

.main-area {
    width: 0px;
    height: 100%;
    flex: auto;
    display: flex;
    flex-direction: column;

    .header {
        width: 100%;
        flex: none;

        .nav-bar {
            width: 100%;
            height: 60px;
            display: flex;
            border-bottom: 1px solid #e4e4e4;

            .collapse-btn {
                width: 60px;
                height: 100%;
                flex: none;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                cursor: pointer;
            }

            .right-area {
                width: 0px;
                height: 100%;
                flex: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0px 60px 0px 20px;

                .user-avatar {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    i {
                        margin-left: 10px;
                    }
                }
            }
        }
    }

    .workspace {
        width: 100%;
        height: 0px;
        flex: auto;
        padding: 20px;
        overflow-y: auto;
        background-color: #f6f6f6;
    }
}
</style>

<template>
    <div class="container admin-page" v-loading="!ready">
        <div class="aside" :class="{ 'collapse-aside': menuCollapse }">
            <div class="logo">Admin<i v-if="!menuCollapse">Template</i></div>
            <el-menu
                class="menu"
                :default-active="$route.path"
                background-color="#263238"
                text-color="#afb5bd"
                active-text-color="#fff"
                router
                :collapse="menuCollapse"
            >
                <template v-for="item1 in menuList">
                    <el-menu-item v-if="item1.is_link" :key="item1.name" :index="`/admin/${item1.route}`">
                        <i :class="item1.icon"></i>
                        <span slot="title">{{ item1.title }}</span>
                    </el-menu-item>
                    <el-submenu v-else :key="item1.name" :index="item1.name">
                        <template slot="title">
                            <i :class="item1.icon"></i>
                            <span>{{ item1.title }}</span>
                        </template>
                        <el-menu-item v-for="item2 in item1.children" :key="item2.name" :index="`/admin/${item2.route}`">{{ item2.title }}</el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </div>
        <div class="main-area">
            <div class="header">
                <div class="nav-bar">
                    <div class="collapse-btn" @click="collapseMenu"><i class="el-icon-menu"></i></div>
                    <div class="right-area">
                        <el-breadcrumb>
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item
                                v-for="item in breadcrumbList"
                                :key="item"
                            >
                                {{ item }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                        <el-dropdown @command="userCommand">
                            <div class="user-avatar">
                                <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
                                <i class="el-icon-arrow-down"></i>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="workspace">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ready: false,
            menuList: [],
            menuCollapse: false
        }
    },
    computed: {
        breadcrumbList() {
            let arr = this.$route.path.split('/');
            arr.splice(0, 2);
            let cRoute = arr.join('/');
            let menuList = this.menuList;
            let rst = [];

            // 先从菜单中查找当前route
            for(let index = 0; index < menuList.length; index++) {
                const item = menuList[index];
                if(item.is_link) {
                    if(cRoute == item.route) {
                        rst.push(item.title);
                        break;
                    }
                }
                else {
                    let childItem = item.children.find(child => {
                        return cRoute == child.route
                    })
                    if(childItem) {
                        rst.push(item.title);
                        rst.push(childItem.title);
                        break;
                    }
                }
            }

            // 如果在菜单中没有找到当前route
            if(rst.length == 0) {
                rst.push(this.$route.meta.title);
            }

            return rst
        }
    },
    watch: {
        $route(val) {
            if(val.name == 'admin') {
                this.toHomePage();
            }
        }
    },
    created() {
        this.initMenu();
    },
    methods: {
        userCommand(value) {
            if(value == 'logout') {
                this.logout();
            }
        },
        logout() {
            this.$confirm('确认退出登录?', {
                type: 'warning'
            })
            .then(() => {
                this.$store.commit('auth/logout');
                this.$router.push('/login');
            })
            .catch(() => {})
        },
        collapseMenu() {
            this.menuCollapse = !this.menuCollapse;
        },
        initMenu() {
            this.Api.menu.get()
            .then(res => {
                this.menuList = res.data;
                if(this.$route.name == 'admin') {
                    this.toHomePage();
                }
                this.ready = true;
            })
        },
        toHomePage() {
            let firstMenu = this.menuList[0];
            if(!firstMenu.is_link) {
                firstMenu = firstMenu.children[0];
            }

            this.$router.replace(`/admin/${firstMenu.route}`);
        }
    }
}
</script>