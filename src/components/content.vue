<template>
  <div id="content">
    <div class="edit_main">
      <div>
        <el-button type="primary">创建问卷</el-button>
        <el-button type="success" @click="save_survey()">保存问卷</el-button>
        <el-button type="warning" @click="preview_survey()">预览问卷</el-button>
      </div>
      <div class="survey_main">
        <div class="survey_title">
          <div class="survey_title_edit animated" v-if="titleEditStatus">
            <el-input v-model="survey.title" autofocus placeholder="请输入问卷标题"></el-input>
            <div style="margin-top:20px;">
              <el-button type="success" @click="saveTitle()">确定</el-button>
            </div>
          </div>
          <div class="survey_title_result" v-else>
            <p @click="titleEdit()">{{survey.title}}</p>
          </div>
        </div>

        <div class="survey_prefix">
          <div class="survey_prefix_edit animated" v-if="prefixEditStatus">
            <el-input type="textarea" :rows="2" autofocus placeholder="请输入问卷简介" v-model="survey.prefix"></el-input>
            <div style="margin-top:20px;">
              <el-button type="success" @click="savePrefix()">确定</el-button>
            </div>
          </div>
          <div class="survey_prefix_result" v-else>
            <p @click="prefixEdit()">{{survey.prefix}}</p>
          </div>
        </div>

        <div class="question">
          <div class="question_item" v-for="(item,index) in survey.question" :key="index">
            <radio-view :itemData="item" :itemIndex="index" v-if="item.type == 'radio'"></radio-view>
            <checkbox-view :itemData="item" :itemIndex="index" v-if="item.type == 'checkbox'"></checkbox-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import radio_view from "./radio.vue"
  import checkbox_view from "./checkbox.vue"

  export default {
    data(){
      return {
        msg:"hello vue",
        titleEditStatus:false,
        prefixEditStatus:false
      }
    },
    computed:{
      ...mapGetters([
        "survey",
        'edit_status'
      ])
    },
    components:{
      "radio-view":radio_view,
      "checkbox-view":checkbox_view
    },
    methods:{
      titleEdit(){
        if(!this.edit_status){
          this.titleEditStatus = !this.titleEditStatus;
          this.$store.dispatch("changeEditStatus");
        }else{
          alert("先编辑好当前的题目")
        }
      },
      saveTitle(){
        this.titleEditStatus = !this.titleEditStatus;
        this.$store.dispatch("changeEditStatus");
      },
      prefixEdit(){
        if(!this.edit_status){
          this.prefixEditStatus = !this.prefixEditStatus;
          this.$store.dispatch("changeEditStatus");
        }else{
          alert("先编辑好当前的题目")
        }
      },
      savePrefix(){
        this.prefixEditStatus = !this.prefixEditStatus;
        this.$store.dispatch("changeEditStatus");
      },
      save_survey(){
        console.log(this.survey)
      },
      preview_survey(){
        console.log(this.survey)
      }
    }
  }
</script>

<style scope>
  @keyframes shake {
    0%, 100% {
      transform: translateZ(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translate3d(-10px,0,0);
      border: 1px solid red;
    }
    20%, 40%, 60%, 80% {
      transform: translate3d(10px,0,0);
      border: 1px solid red;
    }
  }
  .animated{
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .shake {
    animation-name: shake;
  }
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
  .survey_title,.survey_prefix{
    margin: 5px 0;
  }
  .survey_title_edit,
  .survey_prefix_edit{
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }
  .survey_title_result{
    margin: 10px 0;
    font-size: 24px;
    cursor: text;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
  }
  .survey_title_result p{
    border:1px solid #fff;
    padding: 5px;
    margin: 5px
  }

  .survey_prefix_result{
    margin: 10px 0;
    font-size: 14px;
    white-space: normal;
    text-align: left;
    color: #666;
    line-height: 24px;
    cursor: text;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
  }
  .survey_prefix_result p{
    border:1px solid #fff;
    padding: 5px;
    margin: 5px
  }

  .survey_title_result:hover,
  .survey_prefix_result:hover{
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    background:#f9f9f9;
  }
  .survey_title_result:hover p,
  .survey_prefix_result:hover p{
    border:1px solid #ddd;
    background:#fff;
  }

</style>



