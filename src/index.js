import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    konum :null,
    hata:null,
  }


navigator.geolocation.getCurrentPosition(
  (konum)=>{
    this.setState({ konum: konum.coords.latitude});
    console.log(this.state.konum);
  },
  
  (hata)=>{
    this.setState({hata: hata.message});
    console.log(`hata: `, this.state.hata);
  },
)
}

render () {
  return(

<div>
  <h1> This season app</h1>
</div>

  );
  }
};


ReactDOM.render(<App />, document.getElementById('root')
);


