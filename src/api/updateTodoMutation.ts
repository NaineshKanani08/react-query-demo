import { useMutation,useQueryClient } from "react-query";
import instance from "../service/axios";

const updateTodoMutation=()=>{

    const queryClient=useQueryClient()
    // queryClient.cancelQueries(["paginated-data",0]);

    const updateItem=async(data)=>{
        const res=await instance.patch(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data)
        return res?.data
    }
    return (useMutation((updateTodo)=>updateItem(updateTodo),
    {
        onSuccess: async (updateTodo) => {
          queryClient.setQueryData(['todos'], (old) => {
            const tempArray=old.slice();
            const temp= tempArray.map((item)=>{
                if(item.id===updateTodo?.id){
                   return item=updateTodo
                }else{
                    return item
                }
            })
              {return [...temp]}
          }
          );
        }
      }
    ))
}

export default updateTodoMutation