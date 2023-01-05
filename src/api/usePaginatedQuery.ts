import { useQuery } from "react-query";
import instance from "../service/axios";

const usePaginatedQuery =(offset,limit) => {
    const fetchPaginated=async(offset)=>{
        const res=await instance.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        return res.data
    }
    return (
        useQuery(['paginated-data',offset],()=>fetchPaginated(offset))
    )
}

export default usePaginatedQuery