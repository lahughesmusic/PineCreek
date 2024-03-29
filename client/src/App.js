import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { Provider } from 'react-redux'
import configureStore from './store'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setCurrentUser } from './actions/authActions'
import { logoutUser } from './reducers/authReducer';
import Newspaper from './components/Newspaper/index';
import AngryNote from './components/AngryNote/index'
import Keyboard from './components/Keyboard/Keyboard';
import Marionette from  './components/Marionette/index';
import House from './components/House';
import Livingroom from './components/Livingroom';
import Room from './components/Room';
import Stairs from './components/Stairs';
import Door from './components/Door';
import Haunted from './components/Haunted'; 
import Keypad from './components/Keypad';
import Sudoku from './components/Sudoku';
import Dead from './components/Dead'
import Secretdoor from './components/Secretdoor'
import Free from './components/Free';
import Run from './components/Run';
import Help from './components/Help';
import Asylum from './components/Asylum';


const store = configureStore();


//check for token
if(localStorage.jwtToken){
    //set auth token header auth
    setAuthToken(localStorage.jwtToken);
    //decode token and get user info and exp
    const decoded  = jwt_decode(localStorage.jwtToken);
    //set user and is authenticated
    store.dispatch(setCurrentUser(decoded));
    //check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
    //logout user
    store.dispatch(logoutUser());
    //clear current profile
    //redirect to login
    window.location.href = '/login';
    }

}




class App extends Component {
    render(){
        return(
            <Provider store={ store }>

            
            <Router>
            <div className="App">
                <Navbar />
                <Route exact path='/' component={Landing} />
                <div className='container'>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} /> 
                <Route path="/newspaper" component={Newspaper} />
                <Route path="/angrynote" component={AngryNote} />           
                <Route path="/keyboard" component={Keyboard} />
                <Route path="/marionette" component={Marionette} />
                <Route path="/house" component={House} />
                <Route path="/livingroom" component={Livingroom} />
                <Route path="/haunted" component={Haunted} />
                <Route path="/room" component={Room} />
                <Route path="/door" component={Door} />
                <Route path="/stairs" component={Stairs} />
                <Route path="/keypad" component={Keypad} />
                <Route path="/sudoku" component={Sudoku} />
                <Route path="/dead" component={Dead} />
                <Route path="/secretdoor" component={Secretdoor} />
                <Route path="/free" component={Free} />
                <Route path="/run" component={Run} />
                <Route path="/help" component={Help} />
                <Route path="/asylum" component={Asylum} />

                


            
             </div>
                

                
            </div>  
            </Router>  
            </Provider>
            
        );
    }
}

export default App;





