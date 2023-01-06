import Image from 'next/image'
import React from 'react'

const ShowData = ({ data }) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    return (
        <div>
            <Image src={imgUrl} alt='img' width={100} height={100} />
            <h2>name:{data.name}</h2>
            <p>Weight:{data.weight}</p>
            <p>Height:{data.height}</p>
        </div>
    )
}

export default ShowData