"use server"
import { api } from "@/lib/axios"


export const createBlock = async(data:{name:string})=>{
    try{
        const res = await api.post('/block/',data)
        return {success:true,data:res.data}
    }
    catch(err:any){
        return {success:false,message:err?.response.data || err.message,}
    }
}



export const getBlocks = async()=>{
    try{
        const res = await api.get('/block/')
        return res.data
    }
    catch(err:any){
        return {success:false,message:err?.response.data || err.message,}
    }
}