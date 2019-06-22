import actions from './actions'

export default {

    addUserName(state, user) {
        state.username = user;
    },
    addCode(state, code) {
        state.code = code;
    }
}