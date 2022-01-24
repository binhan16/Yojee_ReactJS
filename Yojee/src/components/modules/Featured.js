import React from 'react'
import {Link} from 'react-router-dom'
import "../../style/Featured.css";

function Featured() {
    return (
        <div className='featured container'>
            <p>Featured In</p>
            <div className="featured-items">
                <Link className="featured-pic col-2  col-sm-2" href="#">
                    <img src="./image/img1.png" />
                </Link>
                <Link className="featured-pic col-2  col-sm-2" href="#" >
                    <img src="./image/img2.png" />
                </Link>            
                <Link className="featured-pic col-2 col-sm-2" href="#" >
                    <img src="./image/img3.png" />
                </Link>              
                <Link className="featured-pic col-2 col-sm-2" href="#" >
                    <img src="./image/img4.png" />
                </Link>                 
                <Link className="featured-pic col-2 col-sm-2" href="#" >
                    <img src="./image/img5.png" />
                </Link>                 
            </div>

        </div>
    )
}

export default Featured
