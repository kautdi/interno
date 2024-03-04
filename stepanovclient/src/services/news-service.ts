
import {AxiosResponse} from "axios";
import $api from "../http";



export default class NewsService{
    static async fetchNews(){
        return $api.get(`/news`)
    }
    static async newsDeatails(id:string){
        return $api.get(`/news/?_id=${id}`)
    }
}

