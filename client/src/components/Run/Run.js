import React, { Component } from 'react';
import "./Run.css";


class Run extends Component {
    
    render() { 

        return (  
            <div>
                <p className='runtext'>I'm a detective, I'm not a criminal, I'm not Ricky Wells, I'm a detective, I'm not a criminal, I'm not Ricky Wells, I'm a detective I'm not a criminal I'm not Ricky Wells</p>
                <p className='runtext'>They're catching up to me.. but I'm not a criminal, I'm not a criminal, I'm not Ricky Wells, I'm not... crazy</p>
                
                <p className='runtext'id='cop'>Officer: "Ricky you know why we're here don't you? Just settle down"</p>
                <p className='runtext'>Stop calling me Ricky</p>
                <p className='runtext'id='cop'>Officer: "Why do you always return here when you escape? You know it's the first place we look when they call. This house does not belong to you anymore"</p>
                <p className='runtext'>I got chased out of the house by a demon ghost...</p>
                <p className='runtext' id='cop'>Officer: "Ricky you deserve it, you know. I don't believe in Demon Ghost but I'd be ok with one chasing you around after the things you've done"</p>
                <p className='runtext'>I'm a detective. I'm not a criminal. I'm not a killer. I'm not crazy. I'm a detective. I'm not a criminal. I'm not a criminal. I'm not crazy. I'm investigating a crime. This town needs me, they called to me from the internet.</p>
                <p className='runtext'id='cop'>Officer: (*sigh) "Just take him home"</p>
                <a href='/asylum'><button>Home</button></a>
                

            </div>
            
        );
    }
}


export default Run;

