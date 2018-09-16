import React, { Component } from 'react';
import "./Keypad.css";
import img from './useKeypad.png';

class Keypad extends Component {
    
    render() { 

        return (  
            <div>
                <p>When did this get here? We can't get out unless we get the password WE HAVE NO TIME!!! It looks like he left a reminder, but what does it mean? </p>
                <img alt='alt' id='keypad' src={img} />
                <a href='/sudoku'><button className='sudokuButton'>Hint</button></a>
                

            </div>
            
        );
    }
}


export default Keypad;


