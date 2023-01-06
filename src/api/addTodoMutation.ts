import { useMutation, useQueryClient } from "react-query";
import instance from "../service/axios";

const addTodoMutation=()=>{
    const queryClient=useQueryClient()

    const addTodo=async(newTodo)=>{
        const res=await instance.post("https://jsonplaceholder.typicode.com/todos",newTodo)
        return res?.data
    }
    return(
        useMutation((newTodo)=>addTodo(newTodo),{
            onSuccess: async (newPokemon) => {
                queryClient.setQueryData(['todos'], (old) => {
                    console.log('old :>> ', old);
                    return [...old,newPokemon]
                    // return {...old,results :[...old.results,newPokemon]}
                });
              }
        }

        )
    )
}
export default addTodoMutation