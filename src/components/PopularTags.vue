<template>
  <div>
    <div class="tag-list">
      <router-link class="tag-default tag-pill ng-binding ng-scope"
                   v-for="tag in popularTags" :key="tag" :to="{name:'tag',params:{'slug':tag}}" > {{tag}}</router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {actionTypes} from "@/store/modules/popularTags";

export default {
  name: "McvPopularTags",
  computed : {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error : state => state.popularTags.error,
      popularTags : state => state.popularTags.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }
}
</script>

<style scoped>

</style>