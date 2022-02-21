import popularTags from "@/api/popularTags";

const state = {
	data:null,
	isLoading:false,
	error:null
}

export  const mutationsTypes = {
	getPopularTagsStart : '[PopularTags] getPopularTagsStart',
	getPopularTagsSuccess : '[PopularTags] getPopularTagsSuccess',
	getPopularTagsFailed : '[PopularTags] getPopularTagsFailed',
}

export const actionTypes = {
	getPopularTags : '[PopularTags] getPopularTagsStart',
}
const  mutations = {
	[mutationsTypes.getPopularTagsStart](state){
		state.isLoading = true
		state.data = null
	},
	[mutationsTypes.getPopularTagsSuccess](state,payload){
		state.isLoading = false
		state.data = payload
	},
	[mutationsTypes.getPopularTagsFailed](state){
		state.isLoading = false
	}
}

const actions = {
	[actionTypes.getPopularTags](context){
		return new Promise(resolve => {
			context.commit(mutationsTypes.getPopularTagsStart)
			popularTags.getPopularTags().then(response =>{
				context.commit(mutationsTypes.getPopularTagsSuccess,response)
				resolve(response)
			})
				.catch(()=>{
					context.commit(mutationsTypes.getPopularTagsFailed)
				})
		})
	}
}
export default {
	state,actions,mutations
}
