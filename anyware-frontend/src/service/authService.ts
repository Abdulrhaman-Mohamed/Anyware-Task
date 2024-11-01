import { api } from "./axios";


export const signIn = async(body:object) =>{
    const data = (await api.post('auth/sign-in',body)).data
    return data;
}

export const signUp = async(body:object) =>{
    const data = (await api.post('auth/sign-up',body)).data
    return data;
}

export const signOut = async() =>{
    const data = (await api.post('auth/sign-out')).data
    return data;
}

