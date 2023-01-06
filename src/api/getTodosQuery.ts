import { useQuery } from "react-query";
import instance from "../service/axios";

const getTodosQuery=()=>{
    const getTodos=async()=>{
        const res=await instance.get("https://jsonplaceholder.typicode.com/todos")
        return res?.data.slice(0,20)
    }
    return(
        useQuery("todos",()=>getTodos())
    )
}

export default getTodosQuery 