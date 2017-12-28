const state = {
    num: 0,
    edit_status: false,
    animate_status: false,
    survey: {
        id: "",
        title: "问卷标题",
        prefix: "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！",
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
