import React, {useEffect, useState} from 'react';
import moment from 'moment'; 
import "moment-timezone";
import './App.css';

function App() {
  return (
    <div className="App">
      <Board citiesObj = {[ 
      {city:'Stockholm', region:'Europe'},
      {city:'London', region:'Europe'},
      {city:'Tehran', region:'Asia'},
      {city:'Chicago', region:'America'},
      {city:'Omsk', region:'Asia'},
      {city:'Adelaide', region:'Australia'}]}/>
    </div>
  );
}

function Board(props) {
  return (
    <div className="Board">
      <Clock cityObj={props.citiesObj[0]}/>
      <Clock cityObj={props.citiesObj[1]}/>
      <Clock cityObj={props.citiesObj[2]}/>
      <Clock cityObj={props.citiesObj[3]}/>
      <Clock cityObj={props.citiesObj[4]}/>
      <Clock cityObj={props.citiesObj[5]}/>

    </div>
  )
}


function Clock(props) {
 
let [count, setCount] = useState(0); 

useEffect(() => {
   function timer() {
     setTimeout (() => {
       // eslint-disable-next-line
      setCount(count+=1);
      timer();
    },1000); 
  }
  timer();
}, []);
const cityRegion = props.cityObj.region + '/' + props.cityObj.city; 

// document.body.style.background = "url('[INSERT HTTPS IMAGE URL HERE]')";

  return (
    <div className="clock-flex" style={{backgroundImage: `url('https://source.unsplash.com/random/500x500?${props.cityObj.city}'`}}>
        <h1 className ="city">
          {props.cityObj.city}
        </h1>
        <h3 className="time">
          {moment().tz(cityRegion).format('LTS')}
          {/* {new Date().toLocaleTimeString()} */}
        </h3>
    </div>
  );
}


export default App;


