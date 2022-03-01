<template>
  <div class="home-page">
  <msv-baner/>
    <div class="container-page">
        <div class="row">
          <div class = 'col-md-9'>
            <FeedToggler :tagName="tagName"></FeedToggler>
            <mcv-feed :api-url="apiUrl"></mcv-feed>

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
import FeedToggler from "@/components/FeedToggler";
export default {
  name: "Mcv-TagFeed",
  components: {FeedToggler, MsvBaner, McvFeed,PopularTags},
  computed:{
    tagName(){
      return this.$route.params.slug
    },
    apiUrl(){
      const tagN = this.$route.params.slug
      return `articles/?tag=${tagN}`
    }
  }
}
</script>

<style scoped>

</style>
