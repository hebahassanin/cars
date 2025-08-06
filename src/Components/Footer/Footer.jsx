import React from 'react'
import LogoFooter from '../../assets/images/footer/logo-footer.png';
import contactImg1 from '../../assets/images/footer/location.png';
import contactImg2 from '../../assets/images/footer/call.png';
import contactImg3 from '../../assets/images/footer/sms.png';
import facebook from '../../assets/images/footer/facebook.png';
import insta from '../../assets/images/footer/instagram.png';
import youtube from '../../assets/images/footer/youtube.png';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className='container-fluid py-5 Footer-sec'>
        <div className='row'>
            <div className=' col-sm-6 col-lg-4'>
                <a href='#'>
                    <img src={LogoFooter} className='footer-logo' alt='logo'/>
                </a>

                <div className='d-flex contact'>
                    <div>
                        <img src={contactImg1} alt='location'/>
                    </div>
                    <div>
                        <h5>25566 Hc 1,Glenallen,Alaska, 99588, USA</h5>
                    </div>
                </div>

                <div className='d-flex contact'>
                    <div>
                        <img src={contactImg2} alt='location'/>
                    </div>
                    <div>
                        <h5>+603 4784 273 12</h5>
                    </div>
                </div>

                <div className='d-flex contact'>
                    <div>
                        <img src={contactImg3} alt='location'/>
                    </div>
                    <div>
                        <h5>rentcars@gmail.com</h5>
                    </div>
                </div>

            </div>

            <div className='col-sm-3 col-lg-2 footer-links'>
                <h3 className='h5 text-capitalize'>our products</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>Career</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>cars</a></li>
                    <li className='nav-item'><a className='nav-link text-white ' href='#'>Packages</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>Features</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>Features</a></li>
                </ul>
            </div>

            <div className='col-sm-3 col-lg-2 footer-links'>
                <h3 className='h5 text-capitalize'>about rent cars</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>why choose us</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>our story</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>investor relations</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>press center</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>advertise</a></li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-2 footer-links'>
                <h3 className='h5 text-capitalize'>resources</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>download</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>help center</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>guides</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>partner network</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>cruises</a></li>
                    <li className='nav-item'><a className='nav-link text-white' href='#'>developer</a></li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-2 footer-followus'>
            <h3 className='h5'>follow us</h3>
            <ul className='list-unstyled'>
                    <li>
                        <a href='#'>
                           <img src={facebook} className='fs-5' alt='facebookLogo'/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img src={insta} className='fs-5' alt='instagramLogo'/>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                        <img src={youtube} className='fs-5' alt='youtubeLogo'/>
                        </a>
                    </li>
                </ul>

            </div>


        </div>

        <hr/>
        <p className='pt-3 fs-5 text-capitalize'> Copyright 2023 ・ Rent cars, All Rights Reserved</p>
    </div>
      
    </>
  )
}
