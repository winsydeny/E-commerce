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
        code: null,
        receiver: null, // 收件地址及联系人
        collection: null,
        payment: null,
        paycode: '123456'
    },
    actions,
    mutations,
    getters: {
        getUser(state) {
            return state.username;
        },
        getReceiver(state) {
            return state.receiver;
        },
        getCollection(state) {
            return state.collection;
        },
        getPayment(state) {
            return state.payment;
        },
        getPaycode({
            paycode
        }) {
            return paycode;
        }
    }
})

// (async)actions => (sync)mutations => (update)state => getters => components