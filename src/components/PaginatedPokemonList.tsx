import Image from 'next/image'
import React, { useState } from 'react'
import usePaginatedQuery from '../api/usePaginatedQuery'

const PaginatedPokemonList = () => {
    const [offsetPage, setOffsetPage] = useState(0)
    const [limit, setLimit] = useState(5)

    const limitOptions = [
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 15, text: 15 },
        { value: 20, text: 20 },
    ]

    const { isLoading, data } = usePaginatedQuery(offsetPage, limit)

    const handlePrev = () => {
        setOffsetPage(offsetPage - limit)
    }
    const handleNext = () => {
        setOffsetPage(offsetPage + limit)
    }

    const handleOption = (e) => {
        setLimit(+e.target.value)
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <h2>Paginated Query Example</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.results?.map((item, index) => {
                        const temp = item.url.split('/')
                        const id = temp[6]
                        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td><Image src={imgUrl} alt="image" width={100} height={100} /></td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {isLoading && <h4>Loading...</h4>}
            <div>
                {data?.previous && <button type="button" onClick={handlePrev}>Prev</button>}
                <button disabled={!data?.next} type="button" onClick={handleNext}>Next</button>
                <select value={limit} onChange={(e) => handleOption(e)}>
                    {limitOptions.map((item) => {
                        return (
                            <option value={item.value}>{item.text}</option>
                        )
                    })}
                </select>
                { }
            </div>
        </div >
    )
}

export default PaginatedPokemonList