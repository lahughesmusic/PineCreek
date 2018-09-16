import React, { Component } from 'react';
import "./Newspaper.css";
import img from './newspaper.jpg';

class Newspaper extends Component {
    
handleKeyPress = (event) => {
    const I = 'I';
    const loweri = 'i';
    if(event.key === I || event.key === loweri){
        this.props.history.push('/house');
    }else{
        console.log('nope')
    }
}

    render() { 
    
   

        return (  
            <div >
                <img 
                alt='alt'
                className='news' 
                src={img}
                />
                <div id='one'>
               
        <p id='oneletter'>Ok, so we need a <br /><br />password to get more <br /><br />info Hmm... this <br /><br />appears to only <br /><br />accept one letter</p>
                <input id="input" onKeyDown={this.handleKeyPress} /> 
                </div>
                
             
                    
                    
                

            </div>
            
        );
    }
}


export default Newspaper;




//littlefield creepy house
// https://www.google.com/search?q=littlefield+house+austin+tx&source=lnms&tbm=isch&sa=X&ved=0ahUKEwis5ejtjpjdAhUPA6wKHSODDhYQ_AUICygC&biw=1428&bih=803