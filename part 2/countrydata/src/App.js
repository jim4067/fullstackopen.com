import React , { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  let country = [];
  const [search , setSearch ] = useState('');
  
  const hook = () => {
    axios 
         .get('https://restcountries.eu/rest/v2/all')
         .then( response => {
           if (response !== 200 ){
            country = response.data;
            console.log(country[0].name)
           }
         } )
  }

  useEffect(hook, [] );

  return (
    <div>
      <p>
        find countries <input />
        
      </p>
    </div>
  );
}

export default App;
