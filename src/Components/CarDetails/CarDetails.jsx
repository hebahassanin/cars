import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import carImg from '../../assets/images/landing-page/sec-5/Audi.png';
import user from '../../assets/images/card/user.png';
import airCondition from '../../assets/images/card/conditionar.png';
import frame from '../../assets/images/card/Frame.png';
import doors from '../../assets/images/card/doors.png';
import SectionHeading from '../SeactionHeading/SectionHeading';

function CarDetails() {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`https://myfakeapi.com/api/cars/${id}`)
      .then(res => setCar(res.data.Car))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
        <div className='row'>
      {car ? (
        // <div className="card p-4">
        //   <h2>{car.title}</h2>
        //   <img src={imgCard} alt="" className="w-50 mb-3" />
        //   <p><strong>Price:</strong> {car.price}$</p>
        //   <p><strong>Description:</strong>{car.car_model}</p>
        // </div>
       <>
        <div className='col-md-6 d-flex justify-content-center align-items-center chooseUs-bg'>
            <img src={carImg} className='w-100 m-3' alt=''/>
        </div>
        
        <div className='col-md-6'>
                <SectionHeading subtitle="why choose us" title="We offer the best experience with our rental deals"/>
                
                <div>
                    <img src={airCondition} alt=""/>
                    <small className='text-muted ms-4 fs-5'>Air conditioning</small>
                </div>
                <div>
                    <img src={user} alt=""/>
                    <small className='text-muted ms-4 fs-5'>2 Passanger</small>
                </div>

                <div>
                    <img src={frame} alt=""/>
                    <small className='text-muted ms-4 fs-5'>auto</small>
                </div>

                <div>
                    <img src={doors} alt=""/>
                    <small className='text-muted ms-4 fs-5'>4 doors</small>
                  </div>

            </div>

        </>
        
      ) : (
        <p>Loading...</p>
      )}

      </div>
    </div>
  );
}

export default CarDetails;

