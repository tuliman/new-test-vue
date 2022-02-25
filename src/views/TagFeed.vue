<template>
  <div class="home-page">
  <msv-baner/>
    <div class="container-page">
        <div class="row">
          <div class = 'col-md-9'>
            <mcv-feed :api-url="apiUrl">

            </mcv-feed>
          </div>
          <div class="col-md-3">
            <div class="pull-xs-right">
              <PopularTags> </PopularTags>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import McvFeed from "@/components/Feed";
import PopularTags from "@/components/PopularTags";
import MsvBaner from "@/components/Baner";
export default {
  name: "Mcv-TagFeed",
  components: {MsvBaner, McvFeed,PopularTags},
  computed:{
    apiUrl(){
      const tagN = this.$route.params.slug
      return `articles/?tag=${tagN}`
    }
  }
}
</script>

<style scoped>

</style>
