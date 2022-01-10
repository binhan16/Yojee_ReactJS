import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function HeroSection({
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    buttonLabel2,
    buttonLabel3,
    alt,
    imgStart
}) {
    return (
        // <>
        //     <div
        //         className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        //     >
        //         <div className='container'>
        //             <div
        //                 className='row home__hero-row'
        //                 style={{
        //                     display: 'flex',
        //                     flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
        //                 }}
        //             >
        //                 <div className='col-12 col-sm-7'>
        //                     <div className='home__hero-text-wrapper'>
        //                         <h1 className={lightText ? 'heading' : 'heading dark'}>
        //                             {headline}
        //                         </h1>
        //                         <p
        //                             className={
        //                                 lightTextDesc
        //                                     ? 'home__hero-subtitle'
        //                                     : 'home__hero-subtitle '
        //                             }
        //                         >
        //                             {description}
        //                         </p>
        //                         <p className="title">Choose solutions:</p>
        //                         <br/>
        //                         <div className='btn-swf'>
                                
        //                             <ul className="row">
        //                                 <li className="col-12  btn-1">
        //                                     <Link to='/'>
        //                                     <Button  buttonSize='btn--wide' buttonColor='white'>
        //                                         {buttonLabel}
        //                                     </Button>
        //                                     </Link>
                                
                                
        //                                 </li>
        //                                 <li className="col-12  btn-2">
        //                                     <Link to='/'>
        //                                         <Button  buttonSize='btn--wide' buttonColor='white'>
        //                                             {buttonLabel2}
        //                                         </Button>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="col-12  btn-1">
        //                                     <Link to='/'>
        //                                         <Button  buttonSize='btn--wide' buttonColor='white'>
        //                                             {buttonLabel3}
        //                                         </Button>
        //                                     </Link>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className='col-12 col-sm-5 '>
        //                     <div className='home__hero-img-wrapper'>
        //                         <img src="./image/Business logistics.png" alt={alt} className='home__hero-img' />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <div className="swf container">
  <div className="row">
    <div className="content col-12 col-sm-7 ">
      <div className="text ">
        <h1 className="font-weight-bold">See the world flow</h1>
        <p className="font-weight-bold">Gain full visibility on your logistics operations, manage your partners <br /> and scale your business</p>
      </div>
      <div className="solutions">
        <p>Chose your solutions:</p>
        <ul className="choose d-flex ">
          <div className="row">
            <li className="nav-item col-12 col-sm-4 ">
              <button className="btn-chose btn-1">
                <span>ALL-IN-ONE SAAS PLATFORM</span>
              </button>
            </li>
            <li className="nav-item col-12   col-sm-4">
              <button className="btn-chose btn-2">
                <span>REDUCE COST</span>
              </button>
            </li>
            <li className="nav-item col-12  col-sm-4">
              <button className="btn-chose btn-1">
                <span>IMPROVE VISIBILITY</span>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div className="image col-12 col-sm-5 ">
      <img src="./image/Business logistics.png" /> 
    </div>
  </div>
</div>

    );
}

export default HeroSection;