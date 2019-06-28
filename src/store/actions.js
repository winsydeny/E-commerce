export default {

    setUserName({
        commit
    }, username) {

        commit('addUserName', username);
    },
    setUserCode({
        commit
    }, code) {
        commit('addCode', code);
    },
    setReceiver({
        commit
    }, address) {
        commit('addReceiver', address);
    },

    setCollection({
        commit
    }, collect) {
        // const {
        //     c,
        //     pid
        // } = collect;
        // if (c)
        //     commit('addCollection', pid);
        // else commit('addCollection', -1);
        commit('addCollection', collect)
    },

    setPayment({
        commit
    }, payment) {
        commit('addPayment', payment);
    },
    setPaycode({
        commit
    }, code) {
        commit('addPaycode', code);
    },
    setGoodslist({
        commit
    }, goodslist) {
        commit('addGoodslist', goodslist);
    }
}