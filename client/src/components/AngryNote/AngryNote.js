import React, { Component } from 'react';
import "./AngryNote.css";
import img from './angrynote.jpg';

class AngryNote extends Component {
    
    render() { 

        return (  
            <div>
                <img src={img} />

            </div>
            
        );
    }
}


export default AngryNote;


