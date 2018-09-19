import React, { Component } from 'react';
import './Room.css';
import img from './Sunroom.png';

class Room extends Component {
    render() {

        return (
        <div>
            <p id='roomtext'>Maybe we should check for documents.. oh what's this?</p>  
            
            <img alt='alt'className='sunroom' id='sunRoom' src={img} />
            
            <a href='/angrynote'><button className='angrynoteButton'>Read</button></a>
            
            
            
            
        </div>

        );
    }
}

export default Room;
