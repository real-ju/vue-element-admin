<style lang="less" scoped>
.loading-block {
    width: 100%;
    height: 30vh;
}
</style>

<template>
    <el-dialog
        title="权限配置"
        :visible="value"
        width="50%"
        :close-on-click-modal="false"
        @open="open"
        @close="close"
    >
        <template v-if="ready">
            <el-tabs v-model="tabActiveName">
                <el-tab-pane label="路由权限" name="route">
                    <el-transfer
                        v-model="routePers"
                        :data="routeList"
                        filterable
                        :titles="['所有权限', '已选择']"
                        :button-texts="['移除', '添加']"
                    >
                    </el-transfer>
                </el-tab-pane>
                <el-tab-pane label="功能权限" name="action">
                    <el-transfer
                        v-model="actionPers"
                        :data="actionList"
                        filterable
                        :titles="['所有权限', '已选择']"
                        :button-texts="['移除', '添加']"
                    >
                    </el-transfer>
                </el-tab-pane>
            </el-tabs>
        </template>
        <div v-else class="loading-block" v-loading="true"></div>
        <div slot="footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" :disabled="!ready" @click="close">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ready: false,
            tabActiveName: 'route',
            routeList: [],
            routePers: [],
            actionList: [],
            actionPers: []
        }
    },
    methods: {
        initData() {
            this.Api.platformPerInfo.get()
            .then(res => {
                let routes = res.data.routes;
                let actions = res.data.actions;
                this.routeList = routes.map(item => {
                    return {
                        key: item.route,
                        label: item.title
                    }
                })
                this.actionList = actions.map(item => {
                    return {
                        key: item.value,
                        label: item.name
                    }
                })
                this.ready = true;
            })
        },
        open() {
            this.initData();
        },
        close() {
            Object.assign(this.$data, this.$options.data());
            this.$emit('change', false);
        }
    }
}
</script>