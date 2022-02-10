import feed from "@/api/feed";

const state = {
	data:null,
	isLoading:false,
	error:null
}

export  const mutationsTypes = {
	getFeedStart : '[feed] getFeedStart',
	getFeedSuccess : '[feed] getFeedSuccess',
	getFeedFailed : '[feed] getFeedFailed',
}

export const actionTypes = {
	getFeed : '[feed] getFeedStart',
}
const  mutations = {
	[mutationsTypes.getFeedStart](state){
		state.isLoading = true
		state.data = null
	},
	[mutationsTypes.getFeedSuccess](state,payload){
		state.isLoading = false
		state.data = payload
	},
	[mutationsTypes.getFeedFailed](state){
		state.isLoading = false
	}
}

const actions = {
	[actionTypes.getFeed](context, {apiUrl}){
		return new Promise(resolve => {
			context.commit(mutationsTypes.getFeedStart)
			feed.getFeed(apiUrl).then(response =>{
				context.commit(mutationsTypes.getFeedSuccess,response.data)
				resolve(response.data)
			})
				.catch(()=>{
					context.commit(mutationsTypes.getFeedFailed)
				})
		})
	}
}
export default {
	state,actions,mutations
}
