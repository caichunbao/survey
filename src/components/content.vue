<template>
  <div id="content">
    <div class="edit_main">
      <div>
        <el-button type="primary">创建问卷</el-button>
        <el-button type="success" @click="save_survey()">保存问卷</el-button>
      </div>
      <div class="survey_main">
        <div class="survey_title">
          <el-input v-model="survey.title" placeholder="请输入问卷标题"></el-input>
        </div>

        <div class="survey_prefix">
          <el-input type="textarea" :rows="2" placeholder="请输入问卷简介" v-model="survey.prefix"></el-input>
        </div>

        <div class="question">
          <div class="question_item" v-for="(item,index) in survey.question" :key="index">
            <radio-view :mydata="item" :index="index"></radio-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import radio_view from "./radio.vue"

  export default {
    data(){
      return {
        msg:"hello vue"
      }
    },
    computed:{
      ...mapGetters([
        "survey",
        ""
      ])
    },
    components:{
      "radio-view":radio_view
    },
    methods:{
      save_survey(){
        console.log(this.survey)
      }
    }
  }
</script>

<style scope>
  .edit_main{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 210px;
    right: 0;
    overflow: auto;
    -webkit-transition: right 0.3s;
    transition: right 0.3s;
    white-space: nowrap;
    text-align: center;
    margin: 30px 60px;
    background: #fff;
    padding: 30px;
    border-radius: 6px;
  }
  .survey_main{
    width: 800px;
    margin: 30px auto;
  }
  .survey_title{
    margin: 10px 0;
  }
  .survey_prefix{
    margin: 10px 0;
  }
  .question_item{
    margin: 10px 0;
  }
</style>



