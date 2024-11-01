import { api } from "./axios";

export const getAnnouncements = async() =>{
    const data = (await api.get('announcement')).data
    return data;
}