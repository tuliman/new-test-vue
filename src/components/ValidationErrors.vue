<template>
  <div>
    <ul>
      <li v-for="error in errorMessages" :key="error">{{error}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mcv-ValidationErrors",
  props:{
    validationErrors:{
      type:Object,
      required:true,
    }
  },
  computed:{
    errorMessages(){
      return Object.keys(this.validationErrors).map(name=>{
        const message = this.validationErrors[name].join(', ')
        return `${name} ${message}`
      })
    }
  }
}
</script>

<style scoped>

</style>
