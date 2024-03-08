import { AxiosResponse } from "axios";
import $api from "../http";
import { IProject } from "../models/IProject";

export default class ProjectsService {
  static async fetchProject() {
    return $api.get(`/project`);
  }

  static async projetsDeatails(id: string) {
    return $api.get(`/project/?_id=${id}`);
  }

  static async projetsSort(categoryIndex: number) {
    return $api.get(`/project/?category=${categoryIndex}`);
  }

  static async createProject(projectData: IProject) {
    try {
      const response = await $api.post('/createProject', projectData);
      return response.data;
    } catch (error) {
      console.error('Ошибка при создании проекта:', error);
      throw error;
    }
  }
  static async projectUpdate(project:IProject){
    return $api.post(`/updateProject/`,  project)
  }
  static async projectDelete(id:string){
    return $api.post(`/deleteProject`, {_id:id})
  }
}
