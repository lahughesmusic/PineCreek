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
                <h1 id='small'>It looks like the code needs 4 numbers!</h1>
                <h2 id='small'>Don't turn around now but she's right behind us, someone is ANGRY. He was right, she did need to be killed sheesh.</h2>
                <Countdown 
                id='countdown' 
                date={Date.now() + 30000}
                renderer={renderer} />
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


