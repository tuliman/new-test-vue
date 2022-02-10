import axios from "axios";
import {getItem} from "@/helper/persistensStorage";

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use(config=>{
	const token = getItem('accessToken')
	config.headers.Authorization = token ? `Token ${token}` : ''
	return config
})
export default axios
