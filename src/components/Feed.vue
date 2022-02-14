<template>
  <div>
    <div v-if="isLoading">
      Загрузка
    </div>
    <div v-if="error">
      Ошибки
    </div>
    <div class="article-preview" v-for="(article,index) in feedData" :key="index">
        <div class="article-meta">
          <router-link :to="{'name':'userProfile',params:{'slug':article.author.username}}">
            <img :src="article.author.image"/>
          </router-link>
        </div>
        <div class="article-meta">
          <router-link :to="{'name':'userProfile',params:{'slug':article.author.username}}" class="author">
            {{article.author.username}}
          </router-link>
          <span class="date">{{article.createdAt}}</span>
        </div>
        <div class="pull-xs-right">
            Добавить в любимые
        </div>
        <router-link :to="{name:'article',params:{slug:article.slug}}">
          <h1>{{article.title}}</h1>
          <p>{{article.description}}</p>
          <span> Читать полностью</span>
          TagLost
        </router-link>
    </div>
  </div>

</template>

<script>
import {actionTypes} from "@/store/modules/Feed";
import {mapState} from "vuex";
export default {
  name: "Mcv-Feed",
  props:{
    apiUrl:{
      type:String,
      required:true
    }
  },
  mounted() {
    console.log('init feed')
    console.log(this.feedData)
    this.$store.dispatch(actionTypes.getFeed,{apiUrl:this.apiUrl})
  },
  computed:{
    ...mapState({
      isLoading : state => state.Feed.isLoading,
      feedData : state => state.Feed.data,
      error : state => state.Feed.error,
    }),
  },
}
</script>

<style scoped>

</style>
