import React, { Component } from 'react';
import "./Note.css";
import "./resources/note.pdf";

class Note extends Component {
    
    render() { 
        var madNote = <img className="madNote" type="pdf" alt="madNote" src="./resources/note.pdf" />;
        return (  
            <div>
                {madNote};
            </div>
        );
    }
}


export default Note;




//littlefield creepy house
// https://www.google.com/search?q=littlefield+house+austin+tx&source=lnms&tbm=isch&sa=X&ved=0ahUKEwis5ejtjpjdAhUPA6wKHSODDhYQ_AUICygC&biw=1428&bih=803