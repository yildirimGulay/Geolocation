import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = ()=> {
  navigator.geolocation.getCurrentPosition(
    (konum)=>console.log(`konum:`, konum.coords.latitude),
    (hata)=>console.log(`hata: `, hata.message)
  );

  return(

<div>
  <h1> This season app</h1>
</div>

  );

};


ReactDOM.render(<App />, document.getElementById('root')
);


