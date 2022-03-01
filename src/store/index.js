import {createStore} from "vuex";
import Auth from "@/store/modules/Auth";
import Feed from "@/store/modules/Feed";
import popularTags from "@/store/modules/popularTags";
import Articles from "@/store/modules/Articles";

const store = createStore({
	state:{},
	mutations:{},
	actions:{},
	modules:{Auth,Feed,popularTags,Articles},
})

export default store
