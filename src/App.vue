<template>
    <div id="app">
		  <menu-view></menu-view>
      <content-view></content-view>

    </div>
</template>

<script>
	import menu_view from "./components/menu.vue"
	import content_view from "./components/content.vue"
	import preview_view from "./components/preview.vue"
	export default {
		name: 'app',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components:{
      "menu-view":menu_view,
      "content-view":content_view
		}
	}
</script>

<style>
  html,body{
    background: #f0f0f0;
  }
</style>
