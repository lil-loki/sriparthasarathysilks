import React from 'react'

import CatogoryCard from '../../components/catogory-card/catogory-card.component'

function Home() {
    return (
        <div style={{display:'flex'}}>
            <CatogoryCard />
            <CatogoryCard />
            <CatogoryCard />
            <CatogoryCard />
        </div>
    )
}

export default Home
