import { useMutation,useQueryClient } from "react-query";

const useUpdateItemMutation=()=>{

    const queryClient=useQueryClient()
    // queryClient.cancelQueries(["paginated-data",0]);

    const updateItem=async(data)=>{
        return data;
    }
    return (useMutation((updatePokemon)=>updateItem(updatePokemon),
    {
        onSuccess: async (updatePokemon) => {
          queryClient.setQueryData(["paginated-data",0], (old) => {
            const tempArray=old.results.slice();
            tempArray[updatePokemon?.index]={name:updatePokemon?.name}
              {return {...old,results :[...tempArray]}}
          }
          );
        }
      }
    ))
}

export default useUpdateItemMutation