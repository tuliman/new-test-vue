<template>
  <div class="auth-page">
    <div class="container-page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center"> Зарегистрироваться</h1>
          <p class ='text-xs-center' >
            <router-link :to="{name:'login'}">Войти в акаунт</router-link>
          </p>
          Ошибки регистации
          <McvValidationErrors v-if="validationErrors" :validationErrors="validationErrors">
          </McvValidationErrors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input type="text" v-model="username" class="form-control form-control-lg" placeholder="Имя пользователя">
            </fieldset>
            <fieldset class="form-group">
              <input type="text" v-model="email"  class="form-control form-control-lg" placeholder="Email ">
            </fieldset><fieldset class="form-group">
            <input type="password" v-model="password" class="form-control form-control-lg" placeholder="Пароль">
            </fieldset>
            <button class="btn btn-primary btn-lg pull-xs-right" :disabled="isSubmitting" > Зарегистрироваться</button>
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
      username:'',
    }
  },
  computed:{
    isSubmitting(){
      return this.$store.state.Auth.isSubmitting
    },
    validationErrors(){
      return this.$store.state.Auth.validationError
    }
  },
  methods:{
    onSubmit(){
      console.log('Отправлено')
      this.$store.dispatch(actionTypes.register,{email:this.email,password:this.password,username:this.username})
          .then(user=>{
            console.log(user)
            this.$router.push({name:'Home'})
          })
    }
  }
}

</script>

<style scoped>

</style>
