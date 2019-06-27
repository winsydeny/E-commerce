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
    }
}