import React, { Component } from 'react';
import './Livingroom.css';
import img from './lfWideRoom.png';

class Livingroom extends Component {
    render() {

        return (
        <div>
            <p>Hmmm... what's that on the piano over there?</p>  
            
            <img className='livingRoom' id='livingRoom' src={img} />
            
            <a href='/marionette'><button className='livingRoomButton'>Investigate</button></a>
            
            
            
            
        </div>

        );
    }
}

export default Livingroom;
