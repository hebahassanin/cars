import React from 'react';
import carImg from '../../assets/images/landing-page/sec-5/Audi.png';
import logo1 from '../../assets/images/landing-page/sec-5/user.png';
import logo2 from '../../assets/images/landing-page/sec-5/message.png';
import logo3 from '../../assets/images/landing-page/sec-5/chat.png';
import SectionHeading from '../SeactionHeading/SectionHeading';
import './ChooseUs.css';


export default function ChooseUs() {
  return (
    <>
    <div className='container-fluid py-4'>
        <div className='row'>
            <div className='col-md-6  d-flex justify-content-center align-items-center chooseUs-bg'>
                <img src={carImg} className='w-100 w-sm-25 me-4' alt=''/>
            </div>
            <div className='col-md-6'>
                <SectionHeading subtitle="why choose us" title="We offer the best experience with our rental deals"/>
                <div className='row'>
                    <div className='col-md-2 my-2'>
                        <img src={logo1} className='w-md-75 w-sm-50 d-sm-block mx-sm-auto' alt='logo1'/>
                    </div>
                    <div className='col-md-10 chooseUs-info text-sm-center mb-sm-3 text-md-start'>
                        <h3 className='chooseUs-info-title'>Best price guaranteed</h3>
                        <p className='chooseUs-info-desc'>Find a lower price? We will refund you 100% of the difference.</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2 my-2'>
                        <img src={logo1} className='w-md-75 w-sm-50 d-sm-block mx-sm-auto' alt='logo1'/>
                    </div>
                    <div className='col-md-10 text-sm-center text-md-start mb-sm-3'>
                        <h3 className='chooseUs-info-title'>Experience Driver</h3>
                        <p className='chooseUs-info-desc'>Don't have driver?Don't worry,we have many experienced driver for you.</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2 my-2'>
                        <img src={logo2} className='w-md-75 w-sm-50 d-sm-block mx-sm-auto' alt='logo2'/>
                    </div>
                    <div className='col-md-10 text-sm-center text-md-start mb-sm-3'>
                        <h3 className='chooseUs-info-title'>24 hour car delivery</h3>
                        <p className='chooseUs-info-desc'>Book your car anytime and we will deliver it directly to you.</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2 my-2'>
                        <img src={logo3} className='w-md-75 w-sm-50 d-sm-block mx-sm-auto' alt='logo3'/>
                    </div>
                    <div className='col-md-10 text-sm-center text-md-start mb-sm-3'>
                        <h3 className='chooseUs-info-title'>24/7 technical support</h3>
                        <p className='chooseUs-info-desc'>Have a question? Contact Rentcars support any time when you have problem.</p>
                    </div>
                </div>





            </div>
        </div>
    </div>
      
    </>
  )
}
