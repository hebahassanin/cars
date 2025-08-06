import React from 'react'
import SectionHeading from '../SeactionHeading/SectionHeading'
import location from '../../assets/images/landing-page/location.png';
import upToDate from '../../assets/images/landing-page/calender.png';
import BookCar from '../../assets/images/landing-page/car-icon.png';
import CarBrand1 from '../../assets/images/landing-page/jaguar.png';
import CarBrand2 from '../../assets/images/landing-page/nissan.png';
import CarBrand3 from '../../assets/images/landing-page/volvo.png';
import CarBrand4 from '../../assets/images/landing-page/ac.png';
import CarBrand5 from '../../assets/images/landing-page/audi.png';

import './RentSteps.css';

export default function RentSteps() {
  return (
    <>
    <div className='container rent'>
        <div className='row'>
            <div className='col'>
            <SectionHeading subtitle="how it work" title="Rent with following 3 working steps"/>
            </div>
        </div>

    <div className='row text-center'>
        <div className='col-md-4 rent-info'>
            <img src={location} alt="location"/>
            <h3 className='rent-info-title'>choose location</h3>
            <p className='text-muted rent-info-desc'>choose your and find <br/> your best car</p>
        </div>

        <div className='col-md-4 rent-info'>
            <img src={upToDate} alt="upTodate"/>
            <h3 className='rent-info-title'>pick-up date</h3>
            <p className='text-muted rent-info-desc'>select your pick up date and <br/>time to book your car</p>
        </div>

        <div className='col-md-4 rent-info'>
            <img src={BookCar} alt="bookCar"/>
            <h3 className='rent-info-title'>Book your car</h3>
            <p className='text-muted rent-info-desc'>choose your car and we will deliver <br/> it directly to you</p>
        </div>

    </div>    

    </div>

    <div className='container-fluid py-5 car-brands overflow-hidden'>
        <div className='row'>
            <div className='col-md-12 d-inline-block car-brands-logo'>
                <span>
                    <img src={CarBrand1} alt='carBrand'/>
                </span>
                <span>
                <img src={CarBrand2} alt='carBrand'/>
                </span>
                <span>
                <img src={CarBrand3} alt='carBrand'/>
                </span>
                <span>
                <img src={CarBrand4} alt='carBrand'/>
                </span>
                <span>
                <img src={CarBrand5} alt='carBrand'/>
                </span>

            </div>
        </div>
    </div>
      
    </>
  )
}
