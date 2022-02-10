<template>
  <div class="home-page">
  Banner
    <div class="container-page">
        <div class="row">
          <div class = 'col-md-9'>
            <mcv-feed>

            </mcv-feed>
          </div>
          <div class="col-md-3">
            Popular Tag
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import McvFeed from "@/components/Feed";
export default {
  name: "Mcv-GlobalFeed",
  components: {McvFeed},
  data(){
    return{
      apiUrl:'/articles'
    }
  }
}
</script>

<style scoped>

</style>
