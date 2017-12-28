<template>
  <div class="radio">
    <div class="edit animated" v-if="edit_status_this">
      <el-form label-width="80px">
        <el-form-item label="题目">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="remarks"></el-input>
        </el-form-item>
      </el-form>
      <div class="options">
        <template v-for="(item,index) in options">
          <div class="options_item" :key="index">
            <div class="sort_options_item">
              <i class="el-icon-sort"></i>
            </div>
            <el-input v-model="item.name"></el-input>
            <div class="del_options_item" @click="del_option(index)">
              <i class="el-icon-delete"></i>
            </div>
          </div>
        </template>
        <div class="add_option options_item" @click="add_option()">新建选项</div>
      </div>
      <div class="editor_control">
        <el-button type="success" @click="save()">保存</el-button>
        <el-button type="default" @click="cancel_edit()">取消</el-button>
      </div>
    </div>
    <div class="result" v-else>
      <p class="title">1.{{title}}<span>&nbsp;*</span></p>
      <P class="remarks">{{remarks}}</P>
      <div class="inputs">
        <template v-for="(item,index) in options" >
          <div class="inputs-item" :key="index"><el-radio v-model="radio" label="index">{{item.name}}</el-radio></div>
        </template>
      </div>
      <div class="control_mask">
        <el-button-group>
          <el-button type="default" icon="el-icon-edit" @click="edit()"></el-button>
          <el-button type="default" icon="el-icon-delete" @click="del_option(index)"></el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    data(){
      return {
        radio:"",
        title:"题目",
        remarks:"",
        edit_status_this:true,
        control_mask_status:false,
        options:[
          {
            name:"选项1"
          },
          {
            name:"选项2"
          }
        ]
      }
    },
    mounted:function(){

    },
    computed:{
      ...mapGetters([
        'survey',
        'edit_status'
      ])
    },
    props:[
      "mydata",
      "index"
    ],
    methods:{
      save(){
        this.edit()
      },
      add_option(){
        this.options.push({
          name:"新添加的选项"
        })
      },
      del_option(index){
        console.log(index)
        this.survey.question.splice(index,1)
      },
      edit(){
        this.edit_status_this = !this.edit_status_this;
        this.$store.dispatch("changeEditStatus");
      },
      cancel_edit(){
        this.edit()
      }
    }
  }

</script>
<style>
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
  .radio{
    font-size: 14px;
    color: #333
  }
  /* 编辑样式 */
  .radio .edit{
    border: 1px solid #ddd;
    padding: 40px 20px;
    border-radius: 5px;
    position: relative;
  }
  .options{
    padding-left:80px;
  }
  .options .options_item{
    margin:5px 0;
    position: relative;
  }
  .options .options_item .sort_options_item{
    position: absolute;
    top: 0;
    left: -24px;
    height: 40px;
    width: 25px;
    line-height: 40px;
    cursor: move;
  }
  .options .options_item .del_options_item{
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 25px;
    line-height: 40px;
    cursor: pointer;
  }
  .add_option{
    display: inline-block;
    zoom: 1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    border: 1px dashed #e0e0e0;
    padding: 6px 10px;
    background: #fafafa;
    color: #b2b2b2;
    cursor: pointer;
  }
  .edit_control{
    margin-top: 25px;
  }

/* 结果样式 */
  .radio .result{
    text-align: left;
    position: relative;
    padding:20px;
    font-size: 14px;
  }
  .result .title span{
    color:red;
    position:relative;
    top: 3px;
  }
  .result .inputs-item{
    margin:15px 0;
  }
  .result .control_mask{
    display:none;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.03);
    z-index:99;
    text-align: right;
    padding: 10px;
  }
  .result:hover .control_mask{
    display:block;
  }
</style>

