<template>
  <div id="app">
    <McvTopBar></McvTopBar>
    <router-view></router-view>
  </div>
</template>

<script>

import McvTopBar from "@/views/TopBar";
import {actionTypes} from "@/store/modules/Auth";

export default {
  name : 'McvApp',
  components: {McvTopBar},
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>

<style>

</style>
