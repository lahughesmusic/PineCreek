import React, { Component } from 'react';
import "./Dead.css";
import img from './Skull_and_crossbones.svg';


class Dead extends Component {
    
    render() { 

        return (  
            <div>
                <img  id='crossbones' src={img} />
                <p id='deadnote'>You have "passed away" Cause of Death: DEMON GHOST
                <br />
                <br />Ricky Wells was right, 
                <br />she was not a good person.</p>
            </div>
            
        );
    }
}


export default Dead;


