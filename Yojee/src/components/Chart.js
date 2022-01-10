import React, { useState } from 'react'
import {Button} from './Button'
import {Link} from "react-router-dom"
import './Chart.css'

function Chart() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        < >
            <div className='chart'>
                <p>Automate your operations with 
                <br /> delivery management software</p>
                <div className="container ">
                    <div className="row">
                        <div className="left-chart col-sm-7 col-12">
                            <img src="./image/chart.png" alt="chart" />
                            <br />
                            <p>Get real-time ETA based on the drivers location while keeping <br/>  your customers informed  and dramatically reduces customer </p>
                        </div> 
                        <div className="right-chart col-sm-5 col-12">    
                            <div className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/Group 510.png" />
                                    </div>
                                    <div className="content">
                                        <p>Route Planning and Route Optimisation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/Path 3968.png" />
                                    </div>
                                    <div className="content">
                                        <p>Live Tracking</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/Group 509.png" />
                                    </div>
                                    <div className="content">
                                        <p>Driver App</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/Group 514.png" />
                                    </div>
                                    <div className="content">
                                        <p>Manage your partners/vendors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/Consulting.png" />
                                    </div>
                                    <div className="content">
                                        <p>Easy-to-use API</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <br />
                <Link to='/'
                    
                    onClick={closeMobileMenu}>
                    <Button className="btn-find" buttonStyle={"btn--outline"} >
                        FIND OUT MORE
                    </Button>
                </Link>
            </div>

        </>
    )
}

export default Chart
