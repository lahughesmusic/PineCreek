import React, { Component } from 'react';
import "./Asylum.css";
import img from './asylumpic.png'


class Asylum extends Component {
    
    render() { 

        return (  
            <div>
                <p id='hsh'>Home Sweet Home</p>
                <p id='center'>St. Mary Mental Institution</p>
                <img alt='alt' id='asy' src={img} />

            </div>
            
        );
    }
}


export default Asylum;

