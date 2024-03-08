
import {AxiosResponse} from "axios";
import $api from "../http";
import { ITeam } from "../models/ITeam";


export default class TeamsService{
    static async fetchTeams(){
        return $api.get(`/teams`)
    }
    static async teamDeatails(id:string){
        return $api.get(`/teams/?_id=${id}`)
    }
    static async createTeam(team: ITeam) {
        try {
          const response = await $api.post('/createTeam', team);
          return response.data;
        } catch (error) {
          console.error('Ошибка при создании проекта:', error);
          throw error;
        }
      }
      static async teamUpdate(team:ITeam){
        return $api.post(`/updateTeam`,  team)
      }
      static async teamDelete(id:string){
        return $api.post(`/deleteTeam`,  {_id:id})
      }
}