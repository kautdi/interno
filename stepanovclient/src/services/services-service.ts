
import {AxiosResponse} from "axios";
import $api from "../http";
import { IService } from "../models/IService";



export default class ServicesService{
    static async fetchServices(){
        return $api.get(`/service`)
    }
    static async serviceDeatails(id:string){
        return $api.get(`/service/?_id=${id}`)
    }
    static async createService(service: IService) {
        try {
          const response = await $api.post('/createService', service);
          return response.data;
        } catch (error) {
          console.error('Ошибка при создании проекта:', error);
          throw error;
        }
      }
    
      static async serviceUpdate(service:IService){
        return $api.post(`/updateService`,  service)
      }
      static async serviceDelete(id:string){
        return $api.post(`/deleteService`, {_id:id})
      }
   
}