<template>
  <div class="home-page">
  <msv-baner/>
    <div class="container-page">
        <div class="row">
          <div class = 'col-md-9'>
            <FeedToggler></FeedToggler>
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
import FeedToggler from "@/components/FeedToggler";
import McvFeed from "@/components/Feed";
import PopularTags from "@/components/PopularTags";
import MsvBaner from "@/components/Baner";
export default {
  name: "Mcv-YouFeed",
  components: {MsvBaner, McvFeed,PopularTags,FeedToggler},
  data(){
    return{
      apiUrl:'/articles/feed'
    }
  }
}
</script>

<style scoped>

</style>
