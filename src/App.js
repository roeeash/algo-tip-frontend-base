import React, { useState, useEffect } from 'react';
import {Navbar,About, Contact, PastPredictions } from './components';
import axios from 'axios';
import './design/App.css';

let isHome = false;

let component 
  switch (window.location.pathname) {
    case "/":
      isHome = true;
    break;
  
    case "/about":
      isHome = false;
      component = <About/>
    break;

    case "/contact":
      isHome = false;
      component = <Contact/>
      break;

    case "/past_predictions":
      isHome = false;
      component = <PastPredictions/>
      break;

    default:
      break;
  };

const App = () => {
const [predictions, setPredictions] = useState([]);

let fetchData = async() => {
let resp = await axios.get("http://localhost:3000/text_files/data_in_file.txt");
let final = await resp.data;
setPredictions(final.split("[")[1].split("]")[0].split(",")
.map(p => p.replace(/['"]+/g, '').trim()).filter(p => p !== ""));

}

useEffect(() => {
fetchData();
}, []);

return (
<div>
<header>

<>
<Navbar/>
  {component}
</>

<div style ={{
          display: (isHome ? 'block' : 'none') 
        }}
  >
<h1>Sports Predictions</h1>
</div>

</header>
<body>
<main>
<div style ={{
          display: (isHome ? 'block' : 'none') 
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
);
};

export default App;