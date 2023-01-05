import React from 'react'

const ShowData = ({ data }) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    return (
        <div>
            <img src={imgUrl} />
            <h2>name:{data.name}</h2>
            <p>Weight:{data.weight}</p>
            <p>Height:{data.height}</p>
        </div>
    )
}

export default ShowData