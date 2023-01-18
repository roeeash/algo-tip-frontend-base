import React, { useState, useEffect } from 'react';
import {Navbar,About, Contact } from './components';

import axios from 'axios';
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



</header>

<main>
<div style ={{
          display: (isHome ? 'block' : 'none') 
        }}
  >
<h1>Sports Predictions</h1>
{predictions.length === 0 ? <p>Loading...</p> : predictions.map((prediction, index) => (
<div key={index}>
<p><h3>{prediction}</h3></p>
</div>
))}
</div>

</main>
<footer>
<p>Copyright © 2023 Algo-Tip</p>
</footer>
</div>
);
};

export default App;