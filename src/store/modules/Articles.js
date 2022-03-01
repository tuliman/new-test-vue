import feed from "@/api/article";

const state = {
	data:null,
	isLoading:false,
	error:null
}

export  const mutationsTypes = {
	getArticleStart : '[Article] getArticleStart',
	getArticleSuccess : '[Article] getArticleSuccess',
	getArticleFailed : '[Article] getArticleFailed',
}

export const actionTypes = {
	getArticle : '[Article] getArticleStart',
}
const  mutations = {
	[mutationsTypes.getArticleStart](state){
		state.isLoading = true
		state.data = null
	},
	[mutationsTypes.getArticleSuccess](state,payload){
		state.isLoading = false
		state.data = payload
	},
	[mutationsTypes.getArticleFailed](state){
		state.isLoading = false
	}
}

const actions = {
	[actionTypes.getArticle](context, {slug}){
		return new Promise(resolve => {
			context.commit(mutationsTypes.getArticleStart)
			feed.getArticle(slug).then(response =>{
				context.commit(mutationsTypes.getArticleSuccess,response)
				resolve(response.data)
			})
				.catch(()=>{
					context.commit(mutationsTypes.getArticleFailed)
				})
		})
	}
}
export default {
	state,actions,mutations
}