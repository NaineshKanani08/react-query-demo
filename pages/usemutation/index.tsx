import Link from 'next/link'
import React from 'react'

const index = () => {
    const linkData = [
        { href: '/usemutation/add-todo', text: 'addTodo Example' },
        { href: '/usemutation/add-pokemon', text: 'addPokemon Example' },
    ]

    return (
        <div className="home">
            <ul>
                {linkData.map((data, ind) => {
                    return <li key={ind}><Link href={data.href}>{data.text}</Link></li>
                })}
            </ul>
        </div>
    )
}


export default index