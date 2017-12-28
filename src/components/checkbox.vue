<template>
  <div class="checkbox">
    <p>多选题</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    data(){
      return {
        msg:"hello"
      }
    },
    computed: {
      ...mapGetters([
        'survey',
        'edit_status'
      ])
    },
    props:[
      "itemData",
      "itemIndex"
    ],
    methods:{

    }
  }
</script>
