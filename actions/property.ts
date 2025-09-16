"use server"
import { api } from "@/lib/axios"


export const createProperty = async(data:{name:string})=>{
    try{
        const res = await api.post('/property/',data)
        return res.data
    }
    catch(err:any){
        return {success:false,message:err?.response.data || err.message,}
    }
}



export const getProperties = async()=>{
    try{
        const res = await api.get('/property/')
        return res.data
    }
    catch(err:any){
        return {success:false,message:err?.response.data || err.message,}
    }
}