import React, { Component } from 'react';
import "./AngryNote.css";
import img from './angrynote.jpg';

class AngryNote extends Component {
    
    render() { 

        return (  
            <div>
                <p>Well this is creepy. I think we're on to something though, I wonder what's upstairs...</p>
                <img id='angryNote' src={img} />
                <a href='/stairs'><button className='stairs'>Staircase</button></a>
                

            </div>
            
        );
    }
}


export default AngryNote;


