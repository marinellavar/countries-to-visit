import { useState } from 'react';
import { data } from './data';
import './App.css';



function App() {
  const [countries, setCountries] = useState (0);
  const [visit,setVisit] = useState(data);
  
  
  
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

  const removedCountry = (id) =>{
    let newCountry = visit.filter (visit => visit.id !== id);
    
    setVisit(newCountry)

  }

  // {countries.map( element =>{
  //   const {id, name, description, location, image} = element;
  // })}

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
        <p>{showMore ? description : description.substring(0,230)+ "..."}
        <button onClick={() =>setShowMore(!showMore)}>{!showMore ?"Show more" : "Show less" }</button>
        </p>
      </div>

      <div className='container'>
        <a href={location}>Location</a>
        
      </div>
      
      <div className='btn container'>
        <button onClick={previousCountry}>Previous</button>
        <button onClick={nextCountry}>Next</button>

      </div>


      <div className='container'>
        <button onClick={()=> removedCountry(id)}>Remove</button>
      </div>

      <div className='container'>
        <button onClick={() => setVisit([])}>Delete all</button>
      </div>

      

      
    </div>
  );
}




export default App;