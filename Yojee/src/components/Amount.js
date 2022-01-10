import React from 'react'
import './Amount.css'
import {Link} from 'react-router-dom'
import {Button} from './Button.js'

function Amount({
    headline,
    description,
    buttonLabel2,
    buttonLabel3,
    p2,
    p3,
}) {
    return (
        <>
         <div className="do-more-with"> 
        <div className="top-background" />
        <div className="doMoreWith">
            <h1>{headline}</h1>
            <p className="title">{description}</p>
            <div className="container ">
                
                    <ul className="amount row d-flex   text-align-center">
                        <li className="col-12 col-sm-4  ">
                            <Link to='/'>
                                <button className="btn-amount"  >
                                    4 <br /> out of 10
                                </button>
                            </Link>
                            <p>Top logistics providers <br/>  powered by Yojee <br/> technolog</p>
                        </li>
                        <li className="col-12 col-sm-4 ">
                            <Link to='/'>
                                <button className="btn-amount"  >
                                    {buttonLabel2}
                                </button>
                            </Link>
                            <p>{p2}</p>
                        </li>
                        <li className="col-12 col-sm-4 ">
                            <Link to='/'>
                                <button className="btn-amount"  >
                                    {buttonLabel3}
                                </button>
                            </Link>
                            <p>{p3}</p>
                        </li>
                    </ul>
                
            </div>     
        </div>  
        <div className="bottom-background" />
        </div>
        </>
    )
}

export default Amount
