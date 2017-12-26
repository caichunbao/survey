const state = {
  num: 0,
  survey:{
    id:"000000",
    title:"标题state",
    prefix:"简介prefix",
    question:[]
  }
}

const mutations = {
  add(state) {
    state.num++
  },
  radio(state) {
    state.survey.question.push({
      type:"radio",
      title:"单选题"
    })
  }
}

const getters = {
  num(state) {
    return state.num
  },
  survey(state){
    return state.survey
  }
}

export default {
  state,
  mutations,
  getters
}
