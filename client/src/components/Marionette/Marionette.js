import React, { Component } from 'react';
import './Marionette.css';
import img from './Marionette.jpg';

class Marionette extends Component {
    render() {

        return (
        <div>
            <p>"Funeral March of a Marionette" What an odd piece to have displayed under the circumstances.. lets try the Sunroom</p>  
            
            <img className='marionette' id='angryNote' src={img} />
            
            <a href='/room'><button className='roomButton'>Sunroom</button></a>
            
            
            
            
        </div>

        );
    }
}

export default Marionette;
