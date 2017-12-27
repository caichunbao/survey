<template>
  <div class="radio">
    <div class="edit" v-if="edit_status">
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
    <div class="result" v-if="!edit_status">
      <p><span style="color:red;position: relative;top: 3px;">*&nbsp;</span>{{title}}</p>
      <div class="inputs">
        <template v-for="(item,index) in options" >
          <div class="inputs-item" :key="index"><el-radio v-model="radio" label="index">{{item.name}}</el-radio></div>
        </template>
      </div>
      <div class="control_mask">
        <el-button-group>
          <el-button type="default" icon="el-icon-edit" @click="edit()"></el-button>
          <el-button type="default" icon="el-icon-delete"></el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        radio:"",
        title:"题目",
        remarks:"备注",
        edit_status:true,
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
    props:[
      "mydata"
    ],
    methods:{
      save(){
        this.edit_status = !this.edit_status;
        console.log("打印数据")
      },
      add_option(){
        this.options.push({
          name:"新添加的选项"
        })
      },
      del_option(index){
        this.options.splice(index,1)
        console.log(1)
      },
      edit(){
        this.edit_status = true;
      },
      cancel_edit(){
        this.edit_status = false;
      }
    }
  }

</script>
<style>
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
  }
  .result .inputs-item{
    margin:10px 0;
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

