import { useMutation,useQueryClient } from "react-query";

const useAddItemMutation=()=>{

    const queryClient=useQueryClient()
    // queryClient.cancelQueries(["paginated-data",0]);

    const addItem=async(data)=>{
        return { name: data };
    }
    return (useMutation((newPokemon)=>addItem(newPokemon),
    {
        onSuccess: async (newPokemon) => {
          queryClient.setQueryData(["paginated-data",0], (old) => {return {...old,results :[...old.results,newPokemon]}});
        }
      }
    ))
}

export default useAddItemMutation