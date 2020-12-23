import Api from '@lib/api/reg'

export default {
    namespaced: true,
    state: {
        isLogin: false,
        user: null,
        token: null
    },
    getters: {
        isLogin: (state, getters, rootState, rootGetters) => {
            return state.isLogin
        },
        user: (state, getters, rootState, rootGetters) => {
            return state.user || {}
        },
        token: (state, getters, rootState, rootGetters) => {
            return state.token || ''
        },
        platform: (state, getters, rootState, rootGetters) => {
            return state.user && state.user.platform
        },
        pers: (state, getters, rootState, rootGetters) => {
            return state.user && state.user.role.pers
        }
    },
    mutations: {
        login: (state, payload) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        logout: (state, payload) => {
            state.user = null;
            state.isLogin = false;
        }
    },
    actions: {
        login: async ({ state, commit }, data) => {
            let res = await Api.login.post(data);
            commit('login', {
                user: res.data.user,
                token: res.data.token
            })

            return res
        }
    }
}