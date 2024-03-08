
import {AxiosResponse} from "axios";
import $api from "../http";
import { INews } from "../models/INews";



export default class NewsService{
    static async fetchNews(){
        return $api.get(`/news`)
    }
    static async newsDeatails(id:string){
        return $api.get(`/news/?_id=${id}`)
    }
    static async newsCreate(news:INews){
        return $api.post(`/createNew`, news)
    }
    static async newsUpdate(news:INews){
        return $api.post(`/updateNew/`,  news)
    }
    static async newDelete(id:string){
        return $api.post(`/deleteNew`, {_id:id})
      }
    
}

