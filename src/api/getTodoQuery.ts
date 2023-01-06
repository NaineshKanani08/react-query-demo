import { useQuery } from "react-query";
import instance from "../service/axios";

const getTodoQuery=(id)=>{
    const getTodo=async(id)=>{
        const res=await instance.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return res?.data/* .slice(0,20) */
    }
    return(
        useQuery(["todo",id],()=>getTodo(id))
    )
}

export default getTodoQuery 