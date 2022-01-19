// import React, { Component } from "react";
// import Slider from "react-slick";
// // import { baseUrl } from "./config";

// export default class Chart extends Component {
//   render() {
//     const settings = {
//       customPaging: function(i) {
//         return (
//           <a>
//             <img src={`../assets/slick${i + 1}.png`} />
//           </a>
//         );
//       },
//       dots: true,
//       dotsClass: "slick-dots slick-thumb",
//       fade: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2>Custom Paging</h2>
//         <Slider {...settings}>
//           <div>
//             <img src={ "../assets/slick01.png"} />
//           </div>
//           <div>
//             <img src={ "../assets/slick02.png"} />
//           </div>
//           <div>
//             <img src={ "../assets/slick03.png"} />
//           </div>
//           <div>
//             <img src={ "../assets/slick04.png"} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react'
import {Button} from './Button'
import {Link} from "react-router-dom"
import './Chart.css'

function Chart() {
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false)
    

    return (
        < >
            <div className='chart'>
                <p>Automate your operations with delivery
                <br />  management software</p>
                <div className="container ">
                    <div className="row">
                        <div id="picture" className="chart-left col-sm-7 col-12">
                            <img src="./image/chart.png"/>
                            <br />
                            <p>Get real-time ETA based on the drivers location while keeping <br/>  your customers informed  and dramatically reduces customer </p>
                        </div>
                        <div className="chart-right col-sm-5 col-12">
                            <div className="item ">
                                <div  className="text ">
                                    <div className="icon-chart">
                                        <img src="./image/slick01.png" />
                                    </div>
                                    <div className="content">
                                        <p>Route Planning and Route Optimisation</p>
                                    </div>
                                </div>
                            </div>
                            <div  className="item ">
                                <div className="text ">
                                    <div className="icon-chart">
                                        <img src="./image/slick02.png" />
                                    </div>
                                    <div className="content">
                                        <p>Live Tracking</p>
                                    </div>
                                </div>
                            </div>
                            <div  className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/slick03.png" />
                                    </div>
                                    <div className="content">
                                        <p>Driver App</p>
                                    </div>
                                </div>
                            </div>
                            <div  className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/slick04.png" />
                                    </div>
                                    <div className="content">
                                        <p>Manage your partners/vendors</p>
                                    </div>
                                </div>
                            </div>
                            <div  className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/slick05.png" />
                                    </div>
                                    <div className="content">
                                        <p>Easy-to-use API</p>
                                    </div>
                                </div>
                            </div>
                            <div  className="item ">
                                <div className="text">
                                    <div className="icon-chart">
                                        <img src="./image/slick06.png" />
                                    </div>
                                    <div className="content">
                                        <p>Analytics and Reporting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Link className="btn-find" to='/'
                    onClick={closeMobileMenu}>
                    <Button  buttonStyle={"btn--outline"} >
                        FIND OUT MORE
                    </Button>
                </Link>
            </div>

        </>
    )
}

export default Chart
