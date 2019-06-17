import React, {useState} from 'react';
import moment from 'moment';
import "moment-timezone";
import './App.css';

function App() {
    return (
        <div className="App">
            <Board
                citiesObj={[
                {
                    city: 'Stockholm',
                    region: 'Europe'
                }, {
                    city: 'London',
                    region: 'Europe'
                }, {
                    city: 'Tehran',
                    region: 'Asia'
                }, {
                    city: 'Chicago',
                    region: 'America'
                }, {
                    city: 'Omsk',
                    region: 'Asia'
                }, {
                    city: 'Adelaide',
                    region: 'Australia'
                }
            ]}/>
        </div>
    );
}

function Board(props) {
    let [count,
        setCount] = useState(0)
    function timer() {
        setTimeout(() => {
            setCount(count + 1);
            timer();
        }, 500);
    }
    timer();
    return (
        <div className="Board">

            {props.citiesObj.map((e, i) => {
                return <Clock cityObj={e} key={i}/>;
            })}
            
        </div>
    )
}   

function Clock(props) {
    const cityRegion = props.cityObj.region + '/' + props.cityObj.city;
    return (
        <div
            className="clock-flex"
            style={{
            backgroundImage: `url('https://source.unsplash.com/random/500x500?${props.cityObj.city}'`
        }}>
            <h1 className="city">
                {props.cityObj.city}
            </h1>
            <h3 className="time">
                {moment()
                    .tz(cityRegion)
                    .format('LTS')}
                {/* {new Date().toLocaleTimeString()} */}
            </h3>
        </div>
    );
}

export default App;
