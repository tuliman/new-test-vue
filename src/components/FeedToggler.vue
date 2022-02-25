<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active ">
      <li class="nav-item" v-if="isLoggedIn">
        <router-link :to="{name:'yourFeed'}" class="nav-link" :class="{active:routeName==='yourFeed'}"> Ваши подписьки</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name:'globalFeed'}" class="nav-link" :class="{active:routeName==='globalFeed'}"> Все подписьки</router-link>
      </li>
      <li class="nav-item" v-if="tagName">
        <router-link :to="{name:'tag'}" class="nav-link" :class="{active:routeName==='tag'}"> {{tagName}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {getterTypes} from "@/store/modules/Auth";
export default {
  name: "McvFeedToggler",
  props:{
    tagName:{
      type:String,
      required:false
    }
  },
  computed:{
    routeName (){
      return this.$route.name
    },
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn
    })
  }
}
</script>

<style scoped>

</style>
