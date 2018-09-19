import React, { Component } from 'react';
import './House.css';
import img from './useHouse.png';

class House extends Component {
    render() {

        return (
        <div>
            <p id='text'>I think Ricky Wells lives here, Do we dare enter the house?</p>  
            
            <img alt='alt' className='House' id='house' src={img} />
            
            <a href='/livingroom'><button className='livingRoomButton'>Enter House</button></a>
            
            
            
            
        </div>

        );
    }
}

export default House;
