
import {AxiosResponse} from "axios";
import $api from "../http";



export default class ServicesService{
    static async fetchServices(){
        return $api.get(`/service`)
    }
    static async serviceDeatails(id:string){
        return $api.get(`/service/?_id=${id}`)
    }
   
}