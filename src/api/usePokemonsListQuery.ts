import instance from "../service/axios";
import { useInfiniteQuery } from "react-query";

export const usePokemonsListQuery=()=>{
    const fetchPokemon = async ({
        pageParam = "/pokemon?offset=0&limit=5"
      }) => {
        const request = await instance.get(pageParam);
        const { results, next } = await request.data
        return { response: results, nextPage: next };
      };

    return(
        useInfiniteQuery(['pokemonList'],fetchPokemon,{
            getNextPageParam: (lastPage) => lastPage.nextPage,
        })
        )
}