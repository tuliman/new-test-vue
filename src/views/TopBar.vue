<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <div>
        <router-link to="/" class="navbar-brand"> Домой</router-link>
        <ul class="nav navbar-nav pull-xs-right">

          <template v-if="isLoggedIn">
            <li class="nav-item"><router-link active-class="active" :to="{'name':'Home'}">
              Domoi
            </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{'name':'createArticle'}">
                <i class="ion-compose"></i>&nbsp; Новая статья
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{'name':'settings'}">
                <i class="ion-gear-a"></i>&nbsp; Настройки
              </router-link>
            </li>
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" :to="{'name':'userProfile','params':{
                'slug':'currentUser.username'
              }}">
                <img class="user-pic" src="currentUser.image">&nbsp;
                {{currentUser.username}}
              </router-link>
            </li>
          </template>
          <template v-if="!isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link" :to="{'name':'login'}" active-class="active">
                 Авторизация
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{'name':'register'}" active-class="active">
                 Регистрация
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Mcv-TopBar",
  computed:{
    ...mapState({
      currentUser: state => state.Auth.currentUser,
      isLoggedIn: state => state.Auth.isLoggedIn
    })
  }
}
</script>

<style scoped>

</style>
