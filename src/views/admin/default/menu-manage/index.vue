<style lang="less" scoped>
.action-bar {
    margin-bottom: 20px;
}

.menu-tree-area {
    width: 400px;

    .menu-tree-node {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            i {
                margin-right: 5px;
            }
        }
    }

    .add-btn {
        margin-left: 24px;
    }
}
</style>

<template>
    <div>
        <div class="card main-card">
            <div class="action-bar">
                <el-select v-model="platform">
                    <el-option label="开发者端" value="dev"></el-option>
                    <el-option label="用户端" value="user"></el-option>
                </el-select>
            </div>
            <div class="menu-tree-area">
                <el-tree :data="menuData">
                    <div class="menu-tree-node" slot-scope="{ data }">
                        <div class="title"><i v-if="data.level == 1" :class="data.icon"></i>{{ data.title }}</div>
                        <div class="action">
                            <el-button v-if="data.level == 1 && !data.is_link" type="text" size="mini" @click.stop>添加</el-button>
                            <el-button type="text" size="mini" @click.stop>删除</el-button>
                            <el-button type="text" size="mini" @click.stop>上移</el-button>
                            <el-button type="text" size="mini" @click.stop>下移</el-button>
                        </div>
                    </div>
                </el-tree>
                <el-button class="add-btn" type="text">添加一级菜单+</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            platform: 'dev',
            menuData: [
                {
                    name: 'per-manage',
                    title: '鉴权管理',
                    level: 1,
                    icon: 'el-icon-warning',
                    is_link: 0,
                    children: [
                        {
                            name: 'platform-manage',
                            title: '平台管理',
                            level: 2,
                            icon: null,
                            is_link: 1,
                            _index: 0,
                            _parent: 'per-manage'
                        },
                        {
                            name: 'route-per',
                            title: '路由权限',
                            level: 2,
                            icon: null,
                            is_link: 1,
                            _index: 1,
                            _parent: 'per-manage'
                        },
                        {
                            name: 'action-per',
                            title: '功能权限',
                            level: 2,
                            icon: null,
                            is_link: 1,
                            _index: 2,
                            _parent: 'per-manage'
                        }
                    ],
                    _index: 0
                },
                {
                    name: 'menu-manage',
                    title: '菜单管理',
                    level: 1,
                    icon: 'el-icon-menu',
                    is_link: 1,
                    _index: 1
                }
            ]
        }
    }
}
</script>