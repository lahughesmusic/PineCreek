import React, { Component } from 'react';
import "./Sudoku.css";
import img from './sudoku.png';

class Sudoku extends Component {
    
    render() { 

        return (  
            <div>
                
                <img id='sudoku' src={img} />
                <br />
                <h1>It looks like the code needs 4 numbers!</h1>
                <h2>Don't turn around now but she's right behind us, someone is ANGRY</h2>
                <input className="code" />
                <br />
                <br />
                <button type="submit" id="codeButton">Enter</button>
                

            </div>
            
        );
    }
}


export default Sudoku;


