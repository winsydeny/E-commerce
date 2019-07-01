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
        if (!collect.c) {
            // state.collect.pop(pid);
            let index = state.collection.indexOf(collect.pid);
            if (index > -1) {
                state.collection.splice(index, 1);
            }
        } else {
            state.collection.push(collect.pid);
        }

        // localStorage.setItem('collection', JSON.stringify(collect));

    },
    addPayment(state, payment) {
        state.payment = payment;
    },
    addPaycode(state, paycode) {
        state.paycode = paycode;
    },
    addGoodslist(state, goodslist) {
        state.goodslist = goodslist;
    }
}