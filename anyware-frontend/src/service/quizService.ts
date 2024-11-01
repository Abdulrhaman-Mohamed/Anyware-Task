import { api } from "./axios"


export const getQuizzes = async() =>{
    const data = (await api.get('quiz')).data
    return data;
}

export const deleteQuiz = async(id:string) =>{
    const data = (await api.delete(`quiz/${id}`)).data
    return data;
}