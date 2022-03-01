<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{article.title}}</h1>
        <div class="article-meta">
          <router-link :to="{name:'userProfile',params:{slug:article.author.username}}">
            <img :src="article.author.image">
          </router-link>
        </div>
        <div class="info">
          <router-link :to="{name:'userProfile',params:{slug:article.author.username}}">
            {{article.author.username}}
          </router-link>
        </div>
        <span>
          {{article.createdAt}}
        </span>
        <span>
        <router-link class="btn btn-outline-secondary btn-sm"
                     :to="{name:'editArticle' ,params:{slug:article.slug}}">
          <i class="ion-edit"/>
          Редактировать
        </router-link>
        <button class="btn btn-outline-danger btn-sm">
          <i class="ion-trash-a"/>
          Удолить
        </button>
      </span>
      </div>
    </div>
    <div class="container page">
      <Loading v-if="isLoading"/>
      <ErrorMessage :message="error" v-if="error"/>
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{article.body}}</p>
          </div>
          TagList
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes} from "@/store/modules/Articles";
import {mapState} from "vuex";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

export default {
  name: "Articles",
  components: {ErrorMessage, Loading},
  computed : {
    ...mapState({
      isLoading : state => state.Articles.isLoading,
      error : state => state.Articles.error,
      article : state => state.Articles.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle,{slug:this.$route.params.slug})
  }
}
</script>

<style scoped>

</style>