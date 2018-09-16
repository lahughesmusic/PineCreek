import React, { Component } from 'react';
import "./Stairs.css";
import img from './lfStairs.png';

class Stairs extends Component {
    
    render() { 

        return (  
            <div>
                <p>Were the stairs this creepy a second ago? Well, here goes nothing</p>
                <img alt='alt' id='stairs' src={img} />
                <a href='/door'><button className='doorButton'>Climb</button></a>

            </div>
            
        );
    }
}


export default Stairs;


