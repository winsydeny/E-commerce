import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
/**
 * actions.dispatch(event[string], params[*])
 * 
 * 
 */


export default new Vuex.Store({
    state: {
        username: null,
        code: null
    },
    actions,
    mutations,
    getters: {
        getUser(state) {
            return state.username;
        }
    }
})

// (async)actions => (sync)mutations => (update)state => getters => components