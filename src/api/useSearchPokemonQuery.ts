import instance from "../service/axios";
import { useQuery } from "react-query";
import { SearchData } from "../utils/types";

export const useSearchPokemonQuery=(value:string)=>{
    const searchPokemons=async(value:string)=>{
        const res=await instance.get(`/pokemon/${value}`)
        return res
    }

    return(
        useQuery(['searchPokemon', value],() => searchPokemons(value),  
        {
            enabled: value.length > 0
        })
    )
}