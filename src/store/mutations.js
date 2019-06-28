import actions from './actions'

export default {

    addUserName(state, user) {
        state.username = user;
    },
    addCode(state, code) {
        state.code = code;
    },
    addReceiver(state, receiver) {
        state.receiver = receiver;
    },
    addCollection(state, collect) {
        state.collection = collect;
    },
    addPayment(state, payment) {
        state.payment = payment;
    },
    addPaycode(state, paycode) {
        state.paycode = paycode;
    }
}