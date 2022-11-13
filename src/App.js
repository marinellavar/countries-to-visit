import { useState } from 'react';
import { data } from './data';
import './App.css';



function App() {
  const [countries, setCountries] = useState (0);
  
  
  
  
  const[showMore, setShowMore] = useState (false);
  const {id, name, description, location, image} = data[countries];
  
  const nextCountry =() =>{
    setCountries((countries =>{
      countries ++;
      if (countries > data.length-1){
        countries =0;
      }
      return countries
    }))
  }

  const previousCountry =() =>{
    setCountries(countries =>{
      countries--;
      if (countries < 0){
       return data.length-1;
      }
      return countries;
    })
  }

 
  
  return (
    <div>
      <div className='container'>
        <h1>Countries I would like to visit</h1>
      </div>
      <div className='container'>
        <h2>{id} - {name}</h2>
      </div>

      <div className='container'>
        <img src ={image} height = '400px' alt='pic'/>
      </div>
      
      <div className='container'>
        <p className='description'>{showMore ? description : description.substring(0,215)+ "..."}
        <button className='showmore'  onClick={() =>setShowMore(!showMore)}>{!showMore ?"Show more" : "Show less" }</button>
        </p>
      </div>

      <div className='container'>
        <a className='btn prevNext' href={location}>Location</a>
        
      </div>
      
      <div className='btn container'>
        <button className='btn prevNext' onClick={previousCountry}>Previous</button>
        <button className='btn prevNext next' onClick={nextCountry}>Next</button>

      </div>

    </div>
  );
}




export default App;