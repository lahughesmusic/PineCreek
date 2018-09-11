import React, { Component } from 'react';
import "./Haunted.css";
import img from './hauntedPiano.png';

class Haunted extends Component {
    
    render() { 

        return (  
            <div>
                <p>DEAR GOD ITS WORSE THAN WE THOUGHT!!! HER GHOST IS STILL HERE RRUUUUNNNNNNNNNNNNNNNNNNNNN</p>
                <img id='haunted' src={img} />
                <a href='/keypad'><button className='doorButton'>RUN</button></a>

            </div>
            
        );
    }
}


export default Haunted;

