import React from 'react'
import Amount from '../../Amount'
import Chart from '../../Chart'
import Featured from '../../Featured'
import Carousel from '../../Carousel'
import { homeObjOne, homeObjTwo } from './Data'

function Home() {
    return (
        <>
            <Carousel {...homeObjOne} />
            <Featured />
            <Chart/>
            <Amount {...homeObjTwo} />
            
        </>
    )
}

export default Home
