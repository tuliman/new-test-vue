<template>
  <div id="app">
    <McvTopBar></McvTopBar>
    <router-view></router-view>
  </div>
</template>

<script>

import McvTopBar from "@/views/TopBar";

export default {
  name : 'McvApp',
  components: {McvTopBar},
}
</script>

<style>

</style>
