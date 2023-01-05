import Link from 'next/link';
import React from 'react'

const DemoPage = () => {
    const linkData = [
        { href: '/search-pokemon', text: 'Search Pokemon' },
        { href: '/paginated-query', text: 'Paginated Query Example' },
        { href: '/useInfinite-query', text: 'useInfiniteQuery Example' },
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

export default DemoPage