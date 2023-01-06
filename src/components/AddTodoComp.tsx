import React, { useState } from 'react'
import addTodoMutation from '../api/addTodoMutation'
import getTodosQuery from '../api/getTodosQuery'
import updateTodoMutation from '../api/updateTodoMutation'

const AddTodoComp = () => {
    const [formValue, setFormValue] = useState({ title: '', completed: false })
    const [updateFlag, setUpdateFlag] = useState(false)

    const { mutate } = addTodoMutation()

    const { mutate: updateTodo } = updateTodoMutation()

    const { isLoading, data, refetch } = getTodosQuery()

    const formField = [
        { label: "Title", name: 'title', type: "text", value: formValue.title },
        { label: "Complete", name: 'completed', type: "checkbox", checked: formValue.completed },
    ]

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        setFormValue({ ...formValue, [name]: type !== "checkbox" ? value : checked })
    }

    const handleUpdate = (data) => {
        setUpdateFlag(true)
        const tempData = { ...data, completed: Boolean(data.completed) }
        console.log('tempData :>> ', tempData);
        setFormValue(tempData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (updateFlag) {
            updateTodo(formValue)
        } else {
            mutate(formValue)
        }
    }
    return (
        <div>
            <p>{updateFlag ? "Update Todo" : "Add Todo"}</p>
            <form onSubmit={handleSubmit}>
                {
                    formField.map((field, index) => {
                        return (
                            <div>
                                <label htmlFor={field.name}>{field.label}</label>
                                <input key={index} name={field.name} type={field.type} value={field.value} checked={field.checked} onChange={handleChange} />
                            </div>
                        )
                    })
                }
                <button type="submit">Submit</button>
                <button onClick={refetch}>Fetch Todos</button>
            </form>
            {isLoading && <h4>Loading...</h4>}
            {data?.map((item) =>
            (
                <div key={item.id} style={{ marginTop: "20px" }} onClick={() => handleUpdate(item)}>
                    <h4>Title:{item.title}</h4>
                    <p>Completed:{item.completed.toString()}</p>
                </div>
            )
            )}
        </div>

    )
}

export default AddTodoComp