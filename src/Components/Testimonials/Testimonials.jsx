import React from 'react'
import SectionHeading from '../SeactionHeading/SectionHeading';
import cardImage1 from '../../assets/images/landing-page/sec-6/card1.png';
import cardImage2 from '../../assets/images/landing-page/sec-6/card2.png';
import star from '../../assets/images/card/star.png';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <>
    <div className='container-fluid py-3 testimonials-sec'>
        <div className='row'>
            <div className='col-md-12'>
        <SectionHeading subtitle="testimonials" title="what pepole say about us?"/>
        </div>
        </div>

      <div className='row justify-content-center cards-container'>
        <div className='col-md-6'>
        <div className="card mb-3 animated-card mx-3">
            <div className="row g-0">
                <div className="col-md-4 cardImg">
                    <img src={cardImage1} className="img-fluid rounded-start w-100" alt="testimonials"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title">5.5 <small className='h5'>stars</small></h2>
                    <div className='d-flex'>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                    <p className="card-text fs-5 my-1">"I feel very secure when using caretall's services.
                     Your customer care team is very enthusiastic and the driver is always on time."</p>
                     <p className='card-text text-capitalize'> charlie johnson</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
        </div>

<div className='col-md-6'>
        <div className="card mb-3 animated-card mx-3">
            <div className="row g-0">
                <div className="col-md-4  cardImg">
                    <img src={cardImage2} className="img-fluid rounded-start w-100" alt="testimonials"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title">5.5 <small className='h5'>stars</small></h2>
                    <div className='d-flex'>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                    <p className="card-text fs-5 my-1">"I feel very secure when using caretall's services.
                     Your customer care team is very enthusiastic and the driver is always on time."</p>
                     <p className='card-text text-capitalize'> charlie johnson</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>




    </div>
      
    </>
  )
}
