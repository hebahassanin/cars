import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import imgCard from '../../assets/images/card/car1.png';
import star from '../../assets/images/card/star.png';
import user from '../../assets/images/card/user.png';
import airCondition from '../../assets/images/card/conditionar.png';
import frame from '../../assets/images/card/Frame.png';
import doors from '../../assets/images/card/doors.png';

import img1 from '../../assets/images/card/car1.png';
import img2 from '../../assets/images/card/car2.png';
import img3 from '../../assets/images/card/car3.png';


function AllCars() {

  
  const [cars, setCars] = useState([]);

//
const [currentPage, setCurrentPage] = useState(1);  
const carsPerPage = 8;

const indexOfLastCar = currentPage * carsPerPage;
const indexOfFirstCar = indexOfLastCar - carsPerPage;
const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
const totalPages =Math.ceil(cars.length/carsPerPage);
//

  useEffect(() => {
    axios.get('https://myfakeapi.com/api/cars/')
      .then(res => setCars(res.data.cars))
      .catch(err => console.log(err));
  }, []);

  // const carImages =[img1, img2,img3];
  // const imageIndex=(indexOfFirstCar +idx) % carImages.length;
  // const image=carImages[imageIndex];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Cars</h2>
      <div className="row">
        {/* {cars.map(car => ( */}

        {currentCars.map((car) => (

    <div key={car.id} className='col-md-3 my-3'>

    <div className="card p-2">
      <img src={imgCard} className="card-img-top w-75" alt="..."/>
      <div className="card-body mt-2">
        <h5 className="card-title">{car.car_model}</h5>
        <div className="card-text">
          <img src={star} alt='star'/>
          <small className='text-muted'>(1345 reviews)</small>
        </div>

        <div className='card-text d-flex m-2 gap-3'>
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

      
        <Link to={`/cardetails/${car.id}`} className="btn btn-primary w-100 text-capitalize px-4">view details
        </Link>
    </div>
    </div>



    </div>

    //pagination 
   

        ))}
      </div>
{/*  */}
     
<div className="d-flex justify-content-center my-4">
  <nav>
    <ul className="pagination">

      {/* Previous Button */}
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
          Previous
        </button>
      </li>

      {/* Always show first page */}
      <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
        <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
      </li>

      {/* Show dots if needed before middle pages */}
      {currentPage > 4 && (
        <li className="page-item">
          <span className="page-link">...</span>
        </li>
      )}

      {/* Middle pages */}
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter(page =>
          page !== 1 &&
          page !== totalPages &&
          page >= currentPage - 1 &&
          page <= currentPage + 1
        )
        .map(page => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
          </li>
        ))}

      {/* Show dots before last page */}
      {currentPage < totalPages - 3 && (
        <li className="page-item">
          <span className="page-link">...</span>
        </li>
      )}

      {/* Always show last page */}
      {totalPages > 1 && (
        <li className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
        </li>
      )}

      {/* Next Button */}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
          Next
        </button>
      </li>

    </ul>
  </nav>
</div>

    {/*  */}
    
    </div>
  );
}

export default AllCars