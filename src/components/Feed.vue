<template>
  <div>
    Feed
  </div>
</template>

<script>
import {actionTypes} from "@/store/modules/Feed";
export default {
  name: "Mcv-Feed",
  props:{
    apiUrl:{
      type:String,
      required:true
    }
  },
  mounted() {
    console.log('init feed')
    this.$store.dispatch(actionTypes.getFeed,{apiUrl:this.apiUrl})
  }
}
</script>

<style scoped>

</style>
