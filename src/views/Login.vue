<template>
  <div class="auth-page">
    <div class="container-page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center"> Войти</h1>
          <p class ='text-xs-center' >
            <router-link :to="{name:'register'}">Войти в акаунт</router-link>
          </p>
          Ошибки Авторизации
          <McvValidationErrors v-if="validationErrors" :validationErrors="validationErrors">
          </McvValidationErrors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input type="text" v-model="email"  class="form-control form-control-lg" placeholder="Email ">
            </fieldset><fieldset class="form-group">
            <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Пароль">
          </fieldset>
            <button class="btn btn-primary btn-lg pull-xs-right" :disabled="isSubmitting" > Войти</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import McvValidationErrors from "@/components/ValidationErrors";
import {actionTypes} from "@/store/modules/Auth";

export default {
  name: "mcv-registration",
  components: {McvValidationErrors},
  data() {
    return {
      email:'',
      password:'',
    }
  },
  computed:{
    isSubmitting(){
      return this.$store.state.Auth.isSubmitting
    },
    validationErrors(){
      return this.$store.state.Auth.validationError
    },
    // можно использовать mapState из Vuex
    // ...mapState({
    //   isSubmitting : state => state.Auth.isSubmitting,
    //   validationErrors:state => state.Auth.validationError
    // })
  },
  methods:{
    onSubmit(){
      console.log('Отправлено')
      this.$store.dispatch(actionTypes.login,{email:this.email,password:this.password})
          .then(user=>{
            console.log(user)
            this.$router.push({name:''})
          })
    }
  }
}

</script>

<style scoped>

</style>
