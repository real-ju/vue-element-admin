import Api from './source/Api'

export default {
    login: new Api({
        url: 'user/login',
        public: true
    }),
    route: new Api({
        url: 'user/route'
    }),
    menu: new Api({
        url: 'user/menu'
    }),
    role: new Api({
        url: 'auth/role'
    }),
    platformPerInfo: new Api({
        url: 'auth/platform_per_info'
    })
}