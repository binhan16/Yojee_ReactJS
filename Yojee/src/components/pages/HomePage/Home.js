import React from 'react'
import Amount from '../../modules/Amount'
import Chart from '../../modules/Chart'
import Featured from '../../modules/Featured'
import Carousel from '../../modules/Carousel'
import Form from '../../modules/Form'
import { homeObjTwo } from './Data'

function Home() {
    return (
        <>
            <Carousel />
            <Featured />
            <Chart/>
            <Amount {...homeObjTwo} />
            <Form/>
        </>
    )
}

export default Home
