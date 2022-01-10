import React from 'react'
import Amount from '../../Amount'
import Chart from '../../Chart'
import Featured from '../../Featured'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Featured />
            <Chart/>
            <Amount {...homeObjTwo} />
            
        </>
    )
}

export default Home
