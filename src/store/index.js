import {createStore} from "vuex";
import Auth from "@/store/modules/Auth";
import Feed from "@/store/modules/Feed";

const store = createStore({
	state:{},
	mutations:{},
	actions:{},
	modules:{Auth,Feed},
})

export default store
