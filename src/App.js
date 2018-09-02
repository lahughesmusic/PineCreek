import React, { Components } from 'react';
import './App.css';
import Note from './components/Note';




class App extends Note {
    render(){
        return(
           <Note>
                {Note}
                
            </Note>
        )
    }

}

export default App;





