<template>
  <div class="radio">
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-button type="success" @click="show_data()">显示传过来的数据</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        radio:1
      }
    },
    props:[
      "mydata"
    ],
    mthhods:{
      show_data(){
        console.log(this.mydata)
      }
    }
  }

</script>
