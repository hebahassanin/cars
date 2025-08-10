import React from 'react'
import LogoFooter from '../../assets/images/footer/logo-footer.png';
import contactImg1 from '../../assets/images/footer/location.png';
import contactImg2 from '../../assets/images/footer/call.png';
import contactImg3 from '../../assets/images/footer/sms.png';
import facebook from '../../assets/images/footer/facebook.png';
import insta from '../../assets/images/footer/instagram.png';
import youtube from '../../assets/images/footer/youtube.png';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <footer className=' container-fluid  gx-0 py-5 Footer-sec '>
        <div className='row'>
            <div className='col-sm-6 col-lg-4 text-sm-start'>
                <Link to='#'>
                    <img src={LogoFooter} className='footer-logo' alt='logo'/>
                </Link>

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

            <div className='col-sm-6 col-lg-2 footer-links text-sm-center'>
                <h3 className='h5 text-capitalize'>our products</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>Career</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>cars</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white ' to='#'>Packages</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>Features</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>Features</Link></li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-2 footer-links py-sm-5 py-lg-0'>
                <h3 className='h5 text-capitalize'>about rent cars</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>why choose us</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>our story</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>investor relations</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>press center</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>advertise</Link></li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-2 footer-links py-sm-5 py-lg-0'>
                <h3 className='h5 text-capitalize'>resources</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>download</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>help center</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>guides</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>partner network</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>cruises</Link></li>
                    <li className='nav-item'><Link className='nav-link text-white' to='#'>developer</Link></li>
                </ul>
            </div>

            <div className='col-sm-6 col-lg-2 footer-followus'>
            <h3 className='h5'>follow us</h3>
            <ul className='list-unstyled'>
                    <li>
                        <Link to='#'>
                           <img src={facebook} className='fs-5' alt='facebookLogo'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <img src={insta} className='fs-5' alt='instagramLogo'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <img src={youtube} className='fs-5' alt='youtubeLogo'/>
                        </Link>
                    </li>
                </ul>

            </div>


        </div>

        <hr/>
        <p className='pt-3 fs-5 text-capitalize'> Copyright 2023 ・ Rent cars, All Rights Reserved</p>
    </footer>
      
    </>
  )
}
