<style lang="less" scoped>
.action-bar {
    margin-bottom: 20px;
}

.el-tabs {
    /deep/ .el-tabs__header {
        border-bottom: none;
    }
}

.content-area {
    width: 100%;
    display: flex;

    .group-tabs {
        width: 120px;
        flex: none;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            margin-top: 10px;
            margin-right: 10px;
        }
    }

    .per-table {
        width: 0px;
        flex: auto;

        button {
            margin-top: 10px;
        }
    }
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
            <div class="content-area">
                <div class="group-tabs">
                    <el-tabs v-model="groupTabsValue" type="card" tab-position="left" closable>
                        <el-tab-pane
                            :key="item.name"
                            v-for="item in groupTabs"
                            :label="item.title"
                            :name="item.name"
                        >
                        </el-tab-pane>
                    </el-tabs>
                    <el-button type="text">添加组+</el-button>
                </div>
                <div class="per-table">
                    <el-table
                        :data="perTableData"
                        border
                    >
                        <el-table-column
                            type="index"
                            width="50"
                        >
                        </el-table-column>
                        <el-table-column
                            label="功能名"
                        >
                            <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column
                            label="权限值"
                        >
                            <template slot-scope="scope">{{ scope.row.value }}</template>
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
                    <el-button type="text">添加权限+</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            platform: 'dev',
            groupTabs: [
                {
                    name: 'dashboard',
                    title: '控制台'
                },
                {
                    name: 'per-manage',
                    title: '鉴权管理'
                }
            ],
            groupTabsValue: 'dashboard',
            perTableData: [
                {
                    name: '查看订单统计',
                    value: 'dashboard/view-order-chart'
                },
                {
                    name: '添加功能权限',
                    value: 'per-manage/add-action-per'
                }
            ]
        }
    }
}
</script>