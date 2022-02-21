import {createStore} from "vuex";
import Auth from "@/store/modules/Auth";
import Feed from "@/store/modules/Feed";
import popularTags from "@/store/modules/popularTags";

const store = createStore({
	state:{},
	mutations:{},
	actions:{},
	modules:{Auth,Feed,popularTags},
})

export default store
