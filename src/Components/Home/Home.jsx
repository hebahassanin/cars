import React from 'react'
import CarAnimate from '../../assets/images/landing-page/caranimate.png'
import downloadApp from '../../assets/images/landing-page/andriod.png';
import downloadApp1 from '../../assets/images/landing-page/ios.png';

import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import RentSteps from '../HowItWork/RentSteps';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonials from '../Testimonials/Testimonials';
import DloadApp from '../DloadApp/DloadApp';
import Footer from '../Footer/Footer';

import './Home.css';

export default function Home() {
  return (
    <>
    <div className='container-fluid home'>
        <div className='header-wrapper'>
        <NavBar/>
        <div className='row' style={{height: '500px'}}>
            <div className='col-md-6 home-info px-5 text-sm-center text-md-start'>
                <h2 className='home-info-title fw-bold mb-2 ps-5'>Find, book and <br/> rent a car 
                    <span className='text-primary text-capitalize'> easily</span>
                </h2>
                <p className='text-muted  lh-lg ps-5'>Get a car wherever and whenever <br/> 
                 you need it with your IOS and <br/> Android device.
                </p>
                <div className='my-4 ps-5'>
                    <img src={downloadApp}  className="me-3" alt='dload-Android'/>
                    <img src={downloadApp1} alt='dload-ios'/>
                </div>
            </div>
            <div className='col-md-6 py-5 home-image'>
                <img src={CarAnimate} className='car' alt="carImg"/>

            </div>
        </div>
        </div>

      <SearchBar/>
      <RentSteps/>
      <ChooseUs/>
      <Testimonials/>
      <DloadApp/>
      <Footer/>
    </div>
      
    </>
  )
}
