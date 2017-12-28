const state = {
    num: 0,
    edit_status: false,
    animate_status: false,
    survey: {
        id: "000000",
        title: "标题state",
        prefix: "简介prefix",
        question: []
    }
}

const mutations = {
    add(state) {
        state.num++
    },
    changeEditStatus(state){
        state.edit_status = !state.edit_status;
    },
    changeAnimateStatus(state){
        state.animate_status = !state.animate_status
    }
}

const getters = {
    num(state) {
        return state.num
    },
    survey(state) {
        return state.survey
    },
    edit_status(state) {
        return state.edit_status
    },
    animate_status(state) {
        return state.animate_status
    }
}

export default {
    state,
    mutations,
    getters
}