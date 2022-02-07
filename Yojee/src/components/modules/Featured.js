import React from 'react'
import {Link} from 'react-router-dom'
import './../../assets/scss/bootstrap/_featured.scss';

function Featured() {
    return (
        <div className='featured container'>
            <p>Featured In</p>
            <div className="featured__items">
                <Link className="featured__items--pic col-2  col-sm-2" href="#">
                    <img src="./image/img1.png" />
                </Link>
                <Link className="featured__items--pic col-2  col-sm-2" href="#" >
                    <img src="./image/img2.png" />
                </Link>            
                <Link className="featured__items--pic col-2 col-sm-2" href="#" >
                    <img src="./image/img3.png" />
                </Link>              
                <Link className="featured__items--pic col-2 col-sm-2" href="#" >
                    <img src="./image/img4.png" />
                </Link>                 
                <Link className="featured__items--pic col-2 col-sm-2" href="#" >
                    <img src="./image/img5.png" />
                </Link>                 
            </div>

        </div>
    )
}

export default Featured




