
import {AxiosResponse} from "axios";
import $api from "../http";


export default class TeamsService{
    static async fetchTeams(){
        return $api.get(`/teams`)
    }
    static async teamDeatails(id:string){
        return $api.get(`/teams/?_id=${id}`)
    }
}