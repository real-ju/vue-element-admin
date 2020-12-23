<style lang="less" scoped>
.action-bar {
    margin-bottom: 20px;
}
</style>

<template>
    <div>
        <div class="card">
            <div class="action-bar">
                <el-select v-model="platform">
                    <el-option label="开发者端" value="dev"></el-option>
                    <el-option label="用户端" value="user"></el-option>
                    <el-option label="平台通用*" value="common"></el-option>
                </el-select>
            </div>
            <el-table
                :data="perTableData"
            >
                <el-table-column
                    type="index"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    label="路由名"
                >
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                    label="值"
                >
                    <template slot-scope="scope">{{ scope.row.route }}</template>
                </el-table-column>
                <el-table-column
                    label="实际路径"
                >
                    <template slot-scope="scope">{{ scope.row.path }}</template>
                </el-table-column>
                <el-table-column
                    label="路由标题"
                >
                    <template slot-scope="scope">{{ scope.row.title }}</template>
                </el-table-column>
                <el-table-column
                    label="是否平台通用"
                >
                    <template slot-scope="scope">{{ scope.row.common ? '是' : '否' }}</template>
                </el-table-column>
                <el-table-column
                    label="所属平台"
                >
                    <template slot-scope="scope">{{ scope.row.platform }}</template>
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            platform: 'dev',
            perTableData: [
                {
                    name: 'dashboard',
                    route: 'dashboard',
                    path: '/admin/dashboard',
                    title: '控制台',
                    common: 1,
                    platform: 'common'
                },
                {
                    name: 'route-per',
                    route: 'route-per',
                    path: '/admin/route-per',
                    title: '路由权限',
                    common: 0,
                    platform: 'dev'
                }
            ]
        }
    }
}
</script>