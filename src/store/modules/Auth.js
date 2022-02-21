import authApi from "@/api/auth"
import {setItem} from "@/helper/persistensStorage";

const state ={
	isSubmitting:false,
	isLoading:false,
	currentUser:null,
	validationError:null,
	isLoggedIn:null
}
export const mutationsTypes={
	registerStart:'[Auth] registerStart',
	registerSuccess:'[Auth] registerSuccess',
	registerFailed:'[Auth] registerFailed',

	loginStart:'[Auth] loginStart',
	loginSuccess:'[Auth] loginSuccess',
	loginFailed:'[Auth] loginFailed',

	getCurrentUserStart:'[Auth] getCurrentUserStart',
	getCurrentUserSuccess:'[Auth] getCurrentUserSuccess',
	getCurrentUserFailed:'[Auth] getCurrentUserFailed'
}
export const getterTypes ={
	currentUser:'[Auth] currentUser',
	isLoggedIn : "[Auth] isLoggedIn",
	isAnonymous: '[Auth] isAnonymous'
}
const getters = {
  [getterTypes.currentUser]: state=>{return state.currentUser
  },
	[getterTypes.isLoggedIn]:state=>{return Boolean(state.isLoggedIn)
	},
	[getterTypes.isAnonymous]:state=>{return state.isLoggedIn ===false}

}
export const actionTypes = {
	register:'[Auth] register',
	login:'[Auth] login',
	getCurrentUser:'[Auth getCurrentUser]'
}
const mutations = {
	[mutationsTypes.registerStart](state){
		state.isSubmitting = true
		state.validationError = null
	},
	[mutationsTypes.registerSuccess](state,payload){
		state.isSubmitting = false
		state.currentUser = payload
		state.isLoggedIn = true
		state.validationError = null
	},
	[mutationsTypes.registerFailed](state,payload){
		state.isSubmitting = false
		state.validationError = payload
	},
	[mutationsTypes.loginStart](state){
		state.isSubmitting = true
		state.validationError = null
	},
	[mutationsTypes.loginSuccess](state,payload){
		state.isSubmitting = false
		state.currentUser = payload
		state.isLoggedIn = true
	},
	[mutationsTypes.loginFailed](state,payload){
		state.isSubmitting = false
		state.validationError = payload
	},
	[mutationsTypes.getCurrentUserStart](state){
		state.isLoading = true
	},
	[mutationsTypes.getCurrentUserSuccess](state,payload){
		state.isLoading = false
		state.currentUser =payload
		state.isLoggedIn = true
	},
	[mutationsTypes.getCurrentUserFailed](state){
		state.isLoggedIn = false
		state.currentUser = null
		state.isLoading = false
	}
}
const  actions = {
	[actionTypes.register](context,credentials){
		return new Promise(resolve => {
			context.commit(mutationsTypes.registerSuccess)
			authApi
				.register(credentials).
			then(response=>{
				setItem('accessKey',response.data.user.token)
				context.commit(mutationsTypes.registerSuccess,response.data.user)
				resolve(response.data.user)
			})
			.catch(result=>{
				context.commit(mutationsTypes.registerSuccess,result.response.data.errors)
			})
		})
	},
	[actionTypes.login](context,credentials){
		return new Promise(resolve => {
			context.commit(mutationsTypes.loginStart)
			authApi
				.login(credentials).
			then(response=>{
				setItem('accessToken',response.data.user.token)
				context.commit(mutationsTypes.loginSuccess,response.data.user)
				resolve(response.data.user)
			})
				.catch(result=>{
					context.commit(mutationsTypes.loginFailed,result.response.data.errors)
				})
		})
	},
	[actionTypes.getCurrentUser](context,credentials){
		return new Promise(resolve => {
			context.commit(mutationsTypes.getCurrentUserStart)
			authApi
				.getCurrentUser(credentials).
			then(response=>{
				context.commit(mutationsTypes.getCurrentUserSuccess,response.data.user)
				resolve(response.data.user)
			})
				.catch(()=>{
					context.commit(mutationsTypes.getCurrentUserFailed)
				})
		})
	}
}

export default {
	state,mutations,actions,getters
}
