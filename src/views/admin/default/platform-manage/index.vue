<style lang="less" scoped>
</style>

<template>
    <div>
        <div class="card">
            <el-table
                :data="platformTableData"
            >
                <el-table-column
                    type="index"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    label="平台名"
                >
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                    label="平台标识"
                >
                    <template slot-scope="scope">{{ scope.row.symbol }}</template>
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
            platformTableData: [
                {
                    name: '开发者端',
                    symbol: 'dev'
                },
                {
                    name: '用户端',
                    symbol: 'user'
                }
            ]
        }
    }
}
</script>