    import React, { Component } from 'react';
    import "./Free.css";


    class Free extends Component {
        
        render() { 

            return (  
                <div>
                    <p id='freetext'>Whew that was close <br /><br />
                    *sirens*<br />
                    *sirens getting closer*<br /><br />
                    Whoa, I think they're coming here. Was there some kind of alarm on the place? Should I stay and explain? I'm sure after what I just went through they'll want to help. I'm on their side!</p>
                    <a href='/run'><button>Run</button></a>
                    <a href='/help'><button>Help</button></a>

                </div>
                
            );
        }
    }


    export default Free;

