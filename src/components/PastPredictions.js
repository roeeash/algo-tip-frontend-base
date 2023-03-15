import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PastPredictions= () => {
const [predictions, setPredictions] = useState([]);
const isPastPredicitons = (window.location.pathname === "/past_predictions")

let fetchData = async() => {
let resp = await axios.get("http://localhost:3000/text_files/past_predictions.txt");
let final = await resp.data;
setPredictions(final.split("[")[1].split("]")[0].split(",")
.map(p => p.replace(/['"]+/g, '').trim()).filter(p => p !== ""));

}

useEffect(() => {
fetchData();
}, []);
  return(
    <div>
    <header>
    
    <div style ={{
              display: (isPastPredicitons ? 'block' : 'none') 
            }}
      >
    <h1>Past Predictions</h1>
    </div>
    
    </header>
    <body>
    <main>
    <div style ={{
              display: (isPastPredicitons ? 'block' : 'none') 
            }}
      >
    {predictions.length === 0 ? <p>Loading...</p> : predictions.map((prediction, index) => (
    <div key={index}>
    <p><h3>{prediction}</h3></p>
    </div>
    ))}
    </div>
    
    </main>
    </body>
    <div className='footContainer'>
    <footer>
    <p>Copyright © 2023 Algo-Tip</p>
    </footer>
    </div>
    </div>
  )
};
export default PastPredictions;