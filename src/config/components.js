// Vue全局组件
import Vue from 'vue'

import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Loading,
    Menu,
    MenuItem,
    Submenu,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Avatar,
    MessageBox,
    Table,
    TableColumn,
    Dialog,
    Transfer,
    Tabs,
    TabPane,
    Select,
    Option,
    Tree,
} from 'element-ui'


function reg() {
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Loading.directive);
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
    Vue.use(Tooltip);
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Avatar);
    // Vue.use(MessageBox);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Dialog);
    Vue.use(Transfer);
    Vue.use(Tabs);
    Vue.use(TabPane);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(Tree);

    Vue.prototype.$message = Message;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
}

export default {
    reg
}