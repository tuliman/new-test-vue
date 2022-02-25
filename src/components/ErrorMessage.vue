<template>
  <div>{{message}}</div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props:{
    message:{
      type:String,
      required:true,
      default:"Чето там"
    }
  }
}
</script>

<style scoped>

</style>
