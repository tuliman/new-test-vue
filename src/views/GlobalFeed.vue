<template>
  <div class="home-page">
  <msv-baner/>
    <div class="container-page">
        <div class="row">
          <div class = 'col-md-9'>
            <McvFeedToggler  ></McvFeedToggler>
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
import McvFeedToggler from "@/components/FeedToggler";

export default {
  name: "Mcv-GlobalFeed",
  components: {McvFeedToggler, MsvBaner, McvFeed,PopularTags},
  data(){
    return{
      apiUrl:'/articles'
    }
  }
}
</script>

<style scoped>

</style>
