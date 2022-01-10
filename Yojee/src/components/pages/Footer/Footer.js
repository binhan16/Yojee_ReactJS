import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin
} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                <div className='footer-logo'>
                        <Link to='/' className='logo'>
                            <img src="./image/Logo.png"/>
                        </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Our Software</h2>
                        <Link to='/'>Solving Challenges</Link>
                        <Link to='/'>Features</Link>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>API</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Industry</h2>
                        <Link to='/'>Retail</Link>
                        <Link to='/'>Logistics</Link>
                        <Link to='/'>Food</Link>
                        <Link to='/'>Manufacturing</Link>
                        <Link to='/'>Construction</Link>
                        <Link to='/'>All Industries</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Resources</h2>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Videos</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Developers</Link>
                        <Link to='/'>Case Study</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About</h2>
                        <Link to='/'>Company</Link>
                        <Link to='/'>Media</Link>
                        <Link to='/'>In The Press</Link>
                        <Link to='/'>Poscast</Link>
                        <Link to='/'>Investor Relations</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Contact Us</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                <ul class="list-unstyled">
                  <li class="pr-5">Copyright 2021 Yojee</li>
                  <li class="pr-5">Privacy Policy</li>
                  <li class="pr-5">Term and Conditions</li>
                </ul>
                    {/* <small className='website-rights'>LAVISH © 2020</small> */}
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                'https://www.youtube.com/watch?v=A1JGK-ZfnhA'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;