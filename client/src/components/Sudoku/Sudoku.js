import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import "./Sudoku.css";
import img from './sudoku.png';




class Sudoku extends Component {
    state = {
        code: ''
    }
  

    handleChange(event) {
        

        this.setState({title: event.target.value})
        console.log(event.target.value)
        let number = event.target.value

        if (number === '6191'){
            this.props.history.push('/free')
        }
        this.setState({
            code: this.state.code
        })
        console.log(this.state.code)
      }


      
    
    
    render() { 
        const Completionist = () => {this.props.history.push('/dead')}

        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                return <Completionist />;
            }else{
                return <span>{hours}:{minutes}:{seconds}</span>
            }
        };

        return (  
            <div>
                
                <img id='sudoku' src={img} />
                <br />
                <p id='small'>It looks like the code needs 4 numbers!</p>
                <p id='small'>Don't turn around now but she's right behind us, HURRY! Demon Ghost is ANGRY. He was right, she did need to be killed sheesh.</p>
                <div id='count'>
                <p></p>
                <Countdown 
                id='countdown' 
                date={Date.now() + 30000}
                renderer={renderer} />
                </div>
                <br />
                <input  
                id='code'
                type='text' 
                name='title' 
                value={this.state.title} 
                onChange={this.handleChange.bind(this)} />
                <br />
                <br />
                
              
                

            </div>
            
        );
    }
}


export default Sudoku;


