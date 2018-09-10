import React, { Component } from 'react';
import './Marionette.css';
import img from './Marionette.jpg';

class Marionette extends Component {
    render() {

        return (
        <div>
            <p>Here we see evidence left at the crime scene. This song "Funeral March of a Marionette" was left at the crime scene. Could it be a message?</p>  
            
            <img className='marionette' src={img} />
            
            <button className='maronetteButton'>Next Clue</button>
            
            
            
        </div>

        );
    }
}

export default Marionette;
