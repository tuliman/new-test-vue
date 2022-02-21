<template>
  <div class="home-page">
  Banner
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
export default {
  name: "Mcv-GlobalFeed",
  components: {McvFeed,PopularTags},
  data(){
    return{
      apiUrl:'/articles'
    }
  }
}
</script>

<style scoped>

</style>
