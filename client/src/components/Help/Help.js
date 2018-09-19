import React, { Component } from 'react';
import "./Help.css";


class Help extends Component {
    
    render() { 

        return (  
            <div>
                
                <p className='helptext'>Officer, can you help me? I'm here investigating a crime and I got chased out of the house by a demon ghost...</p>
                <p className='helptext' id='cop'>"Ricky you deserve it, you know. I don't believe in Demon Ghost but I'd be ok with one chasing you around after the things you've done"</p>
                <p className='helptext'>I'm not Ricky, I'm a detective, on a top secret mission to solve the murder</p>
                <p className='helptext' id='cop'>"Someone beat you to it. Let's get you home"</p>
                <a className='helptext'href='/asylum'><button>Home</button></a>d
                

            </div>
            
        );
    }
}


export default Help;

