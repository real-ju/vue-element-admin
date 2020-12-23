<style lang="less" scoped>
</style>

<template>
    <div>
        <div class="card">
            <el-table
                :data="roleTableData"
            >
                <el-table-column
                    type="index"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    label="角色名"
                >
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                    label="操作"
                >
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text" @click="authConfig">权限配置</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <per-config-dialog v-model="showPerConfigDialog"></per-config-dialog>
    </div>
</template>

<script>
import PerConfigDialog from './dialog/per-config.vue'

export default {
    components: {
        PerConfigDialog
    },
    data() {
        return {
            roleTableData: [],
            showPerConfigDialog: false
        }
    },
    created() {
        this.initData();
    },
    methods: {
        authConfig() {
            this.showPerConfigDialog = true;
        },
        initData() {
            this.Api.role.get()
            .then(res => {
                this.roleTableData = res.data.list;
            })
        }
    }
}
</script>