import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import SectionHeading from '../SeactionHeading/SectionHeading';
import axios from 'axios';
import arrowRight from '../../assets/images/card/arrow-right.png';
import Car from '../Car/Car';
import { Link } from 'react-router-dom';

export default function SearchBar() {

  let [cars, setCars] =useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  let getCars =async()=>{

    try {

      let response = await axios.get("https://myfakeapi.com/api/cars/");
      // setCars(response?.data?.cars);

      setCars(response?.data?.cars.slice(0,4));
      
      
      
    } catch (error) {
      console.error("Error fetching cars:", error);
      
    }
    
  }

useEffect(()=>{
  getCars();
},[])
// console.log(cars);
const filteredCars = cars.filter((car)=>
car.car.toLowerCase().includes(searchTerm.toLowerCase())||
car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
);

// console.log(filteredCars);
// let firstFour= searchTerm !==""?filteredCars:cars.slice(0,4);


// let firstFour= cars.slice(0,4);
// console.log(firstFour);

  return (
    <>
    <div className='container search-bar'>
        <div className="input-group flex-nowrap input-group-lg">
            <span className="input-group-text" id="addon-wrapping">
                <FaLocationDot />
            </span>
            <input type="text" className="form-control" placeholder="Search by Name" aria-describedby="addon-wrapping"
            onChange={(e)=> setSearchTerm(e.target.value)}/>
            <button type='button' className='btn btn-primary'>Search</button>
        </div>

        <SectionHeading  subtitle={"popular rental deals"} title={"Most popular cars rental deals"}/>


        <div className='row'>

          {filteredCars.map((car,index)=>(

          // {searchTerm==""? firstFour.map((car,index)=>(
   
          <Car key={car.id} car={car} index={index}/>

          ))}

          
        </div>

    <div className='d-flex justify-content-center pt-4'>     
        <Link to="/allcars" className='btn btn-outline-secondary py-2 px-4 fs-5 text-capitalize'>show all vehicles
          <img src={arrowRight} className='ms-2' alt=''/>
      </Link>
     </div>
        
    </div>
      
    </>
  )
}
