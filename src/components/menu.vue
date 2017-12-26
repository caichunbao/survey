<template>
  <div id="list">
		<div class="edit_slider">
      <div class="edit_ul">
        <ul>
          <li class="type_item" v-for="(item,index) in type_list" :key="index">
            <a href="#" @click="add_question(item.type)">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
        type_list:[
          {
            name:"单选框",
            type:"radio"
          },
          {
            name:"多选框",
            type:"checkbox"
          },
          {
            name:"文本框",
            type:"textarea"
          }
        ]
			}
    },
    mounted:function(){
      console.log(this.$store)
    },
		methods:{
      add_question(type){
        console.log(type)
        this.$store.dispatch(type)
      }
		}
	}
</script>

<style scope>
  .edit_slider{
    width: 200px;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    border-right: 1px solid #e0e0e0;
    background-color: #fafafa;
  }
  .edit_ul{
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    overflow-y: auto;
  }
  .edit_slider ul{
    list-style-type: none;
    padding:0;
  }
  .edit_slider ul li{
    height: 38px;
    line-height: 38px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    margin-bottom: 3px;
  }
  .edit_slider ul li a{
    display: block;
    height: 100%;
    font-size: 14px;
    color: #333;
    text-decoration: none;
    padding-left: 10px;
    cursor:pointer;
  }
</style>

