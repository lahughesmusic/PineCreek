import React, { Component } from 'react';
import "./Secretdoor.css";
import img from './secretdoor.png';

class Secretdoor extends Component {
    
    render() { 
    
   

        return (  
            <div >
                <p id='secretdoortext'>Whoa what was that?! Is that a secret door?</p>
                <img alt='alt' id='secretdoor'src={img} />
                <a href='/room'><button className='livingRoomButton'>Let's go!</button></a>
               
           
                
             
                    
                    
                

            </div>
            
        );
    }
}


export default Secretdoor;




//littlefield creepy house
// https://www.google.com/search?q=littlefield+house+austin+tx&source=lnms&tbm=isch&sa=X&ved=0ahUKEwis5ejtjpjdAhUPA6wKHSODDhYQ_AUICygC&biw=1428&bih=803