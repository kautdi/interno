
import {AxiosResponse} from "axios";
import $api from "../http";



export default class ProjectsService{
    static async fetchProject(){
        return $api.get(`/projets`)
    }
    static async projetsDeatails(id:string){
        return $api.get(`/project/?_id=${id}`)
    }
    static async projetsSort(categoryIndex:number){
        return $api.get(`/project/?category=${categoryIndex}`)
    }
}