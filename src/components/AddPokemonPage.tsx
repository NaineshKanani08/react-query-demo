import React, { useState } from 'react'
import useAddItemMutation from '../api/useMutationQuery'
import usePaginatedQuery from '../api/usePaginatedQuery'
import useUpdateItemMutation from '../api/useUpdationQuery'

const AddPokemonPage = () => {
    const [newData, setNewData] = useState('')
    const [updateFlag, setUpdateFlag] = useState(false)
    const [indexValue, setIndexValue] = useState(null)
    const { isLoading, data } = usePaginatedQuery(0, 10)

    const { mutate } = useAddItemMutation()
    const { mutate: updateMutation } = useUpdateItemMutation()

    const handleChange = (e) => {
        const { value } = e.target
        setNewData(value)

    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (newData) {
            mutate(newData)
        }
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        if (newData) {
            updateMutation({ name: newData, index: indexValue })
        }
    }

    const handleUpdateData = ({ name, index }) => {
        setUpdateFlag(true)
        setNewData(name)
        setIndexValue(index)
    }
    return (
        <div>
            <input value={newData} onChange={handleChange} />
            <button type='submit' onClick={updateFlag ? handleUpdate : handleAdd}>{updateFlag ? 'Update' : "Add"}</button>
            {isLoading && <h4>Loading...</h4>}
            <ul>
                {data?.results?.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleUpdateData({ name: item?.name, index })}>
                            {item?.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AddPokemonPage