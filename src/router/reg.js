import { asyncViewImport } from '@/config/util'

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登陆',
            public: true
        },
        component: asyncViewImport('login/index.vue')
    },
    {
        path: '/404',
        name: 'error-404',
        meta: {
            title: '404 Not Found',
            public: true
        },
        component: asyncViewImport('error/404.vue')
    }
]