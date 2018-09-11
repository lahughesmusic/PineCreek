import React, { Component } from 'react';
import "./Door.css";
import img from './woodenCreepDoor.png';

class Door extends Component {
    
    render() { 

        return (  
            <div>
                <p>Dear God.. why does everything suddenly look like the set of a horror movie? Here we go</p>
                <img id='door' src={img} />
                <a href='/haunted'><button className='haunted'>Open Door</button></a>

            </div>
            
        );
    }
}


export default Door;

