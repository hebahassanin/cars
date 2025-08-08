import React from 'react';
import imgCard from '../../assets/images/card/car1.png';
import star from '../../assets/images/card/star.png';
import user from '../../assets/images/card/user.png';
import airCondition from '../../assets/images/card/conditionar.png';
import frame from '../../assets/images/card/Frame.png';
import doors from '../../assets/images/card/doors.png';
import arrowRight from '../../assets/images/card/arrow-right.png';
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/card/car1.png';
import img2 from '../../assets/images/card/car2.png';
import img3 from '../../assets/images/card/car3.png';

export default function Car({car,index}) {

  const carImages =[img1, img2,img3];
  return (

      
      <div className='col-md-3 col-sm-6'>

          <div className="card  p-2">
            <img src={carImages[index % carImages.length]} className="card-img-top w-75" alt="..."/>
            <div className="card-body mt-2">
              <h5 className="card-title">{car.car} ({car.car_model_year})</h5>
              <h6 className='card-text'>{car.car_model}</h6>
              <div className="card-text">
                <img src={star} alt='star'/>
                <small className='text-muted'>(1345 reviews)</small>
              </div>

              <div className='card-text d-flex m-2 gap-3 '>
                  <div>
                    <img src={user} alt=""/>
                    <small className='text-muted'>2 Passanger</small>
                  </div>

                  <div>
                    <img src={frame} alt=""/>
                    <small className='text-muted'>auto</small>
                  </div>
              </div>

              <div className='card-text d-flex mb-3 gap-2'>
                  <div>
                    <img src={airCondition} alt=""/>
                    <small className='text-muted'>Air conditioning</small>
                  </div>

                  <div>
                    <img src={doors} alt=""/>
                    <small className='text-muted'>4 doors</small>
                  </div>
              </div>

              <hr/>
              <div className='d-flex justify-content-between'>
                <p className='text-muted text-capitalize'> price</p>
                <p className='text-muted'>{car.price} /day</p>
              </div>

              <Link to={`/cardetails/${car.id}`} className="btn btn-primary w-100 text-capitalize">view details
              </Link>
          </div>
          </div>



</div>


  )
}
