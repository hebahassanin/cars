import React from 'react';
import downloadApp from '../../assets/images/landing-page/andriod.png';
import downloadApp1 from '../../assets/images/landing-page/ios.png';
import dload from '../../assets/images/landing-page/sec-7/iphone-14.png';
import './Dload.css';

export default function DloadApp() {
  return (
    <>
    <div className='container-fluid mt-4'>
        <div className='row'>
            <div className='col-md-6 dload-info'>
                <h2 className='text-capitalize fw-bold mb-2'>download rentcars App for 
                    <span className='text-primary'> free</span>
                </h2>
                <p>
                    for faster, easier booking and exclusive deals.
                </p>
                <div className='my-4'>
                    <img src={downloadApp}  className="me-3" alt='dload-Android'/>
                    <img src={downloadApp1} alt='dload-ios'/>
                </div>
                <form>
                    <div className='mb-3'>
                        <input type='text' placeholder='Name' className="form-control dload-input rounded-pill"/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' placeholder='Phone Number' className="form-control dload-input rounded-pill"/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' placeholder='Email' className="form-control dload-input rounded-pill"/>
                    </div>
                    <div className='dload-btn'>
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                    
                </form>

            </div>
            <div className='col-md-6 d-flex align-items-end'>
                <img src={dload} alt='dloadPhoto' className='w-50'/>

            </div>
        </div>

    </div>
      
    </>
  )
}
