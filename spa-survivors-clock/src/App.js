import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board citiesObj = {[ 
      {city:'Stockholm',timeZone:1},
      {city:'London',timeZone:2},
      {city:'Tehran',timeZone:3}]}/>
    </div>
  );
}

function Board(props) {
  return (
    <div className="Board">
      <Clock cityObj={props.citiesObj[0]}/>
      <Clock cityObj={props.citiesObj[1]}/>
      <Clock cityObj={props.citiesObj[2]}/>

    </div>
  )
}


function Clock(props) {
 
let [count, setCount] = useState(0); 

useEffect(() => {
   function timer() {
     setTimeout (() => {
      setCount(count+=1);
      console.log(count);
      timer();
    },1000); 
  }
  timer();
}, []);

  return (
    <div className="Clock">
        <h1>
          {props.cityObj.city}
        </h1>
        <h3>
          {props.cityObj.timeZone }
          <br/>
          {new Date().toLocaleTimeString()}
          <br/>
          
        </h3>
    </div>
  );
}


export default App;


