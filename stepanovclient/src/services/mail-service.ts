import { AxiosResponse } from "axios";
import $api from "../http";

export default class MailService {
    static async JoinMail() {
        // Замените '/news' на свой актуальный эндпоинт для отправки запроса GET
        return $api.get(`/news`);
    }

    static async ContactMail(name: string, email: string, subject: string, phone: string, message: string) {
        // Используйте свой актуальный эндпоинт для отправки запроса POST
        return $api.post(`/contactusmail`, { name:name, email:email, subject:subject, phone:phone, message:message });
    }
}
