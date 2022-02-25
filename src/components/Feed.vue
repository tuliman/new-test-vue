<template>
  <div>
    <div v-if="isLoading">
      <loading></loading>
      <error-message v-if="error" :message = error ></error-message>
    </div>
    <div v-if="error">
      Ошибки
    </div>
    <div v-if="feedData">
      <div class="article-preview" v-for="(article,index) in feedData.articles" :key="index">
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

          <router-link :to="{name:'article',params:{slug:article.slug}}">
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span> Читать полностью</span>
            TagLost
          </router-link>
      </div>
      <Pagination :total="feedData.articlesCount" :limit="limit"  :url="baseUrl" :currenPage="currentPage">Пагинация</Pagination>
    </div>
  </div>

</template>

<script>
import {actionTypes} from "@/store/modules/Feed";
import {mapState} from "vuex";
import Pagination from "@/components/Pagination";
import {limit} from "@/helper/vars";
import {stringify,parseUrl} from 'query-string'
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

export default {
  name: "Mcv-Feed",
  components: {ErrorMessage, Loading, Pagination},
  props:{
    apiUrl:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      limit,
    }
  },
  computed:{
    ...mapState({
      isLoading : state => state.Feed.isLoading,
      feedData : state => state.Feed.data,
      error : state => state.Feed.error,
    }),
    currentPage(){
      return Number(this.$route.query.page || '1')
    },
    baseUrl(){
      return this.$route.path
    },
    offset(){
      return this.currentPage * limit - limit
    }
  },
  mounted() {
    console.log('init feed')
    this.$store.dispatch(actionTypes.getFeed,{apiUrl:this.apiUrl})
  },
  watch:{
    currentPage(){
      this.fetchFeed()
    }
  },
  methods:{
    fetchFeed(){
      // Использование библиотеки для парса урла
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifyPar = stringify({limit,offset:this.offset,...parsedUrl.query})
      const  apiUrlWithParams = parsedUrl.url+'?'+stringifyPar
      this.$store.dispatch(actionTypes.getFeed,{apiUrl: apiUrlWithParams})
    }
  }
}
</script>

<style scoped>

</style>
