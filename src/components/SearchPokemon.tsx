import React from 'react'
import { useSearchPokemonQuery } from '../api/useSearchPokemonQuery';
import useDebounce from '../hooks/useDebounce';
import ShowData from './ShowData';

const SearchPokemon = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const debounedSearchValue = useDebounce(searchValue, 300);

    const { isLoading, isError, error, data } = useSearchPokemonQuery(debounedSearchValue)

    const handleChange = (e: { target: { value: string; }; }) => {
        const { value } = e.target
        setSearchValue(value)
    }


    return (
        <div>
            <h1> Search Your Pokemon</h1 >
            <input
                type="text"
                onChange={handleChange}
                value={searchValue}
            />
            {isLoading && <h3>Loading...</h3>}
            {isError && <h3>{error.message}</h3>}
            {data && Object.keys(data).length && <ShowData {...{ data: data?.data }} />}
        </div>
    )
}

export default SearchPokemon


