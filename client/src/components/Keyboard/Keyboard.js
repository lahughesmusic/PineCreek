import React, { Component } from 'react';
import './Keyboard.css';
import { Redirect } from 'react-router-dom'


class Keyboard extends Component {
constructor(props){
  super();
  this.state = {
   inputValue: ''
   
    
  };
}



updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

handleKeyPress = (event) => {
  
  let face = document.querySelectorAll('li')
  for  (let i = 0; i < face.length; i++){
    face[i].addEventListener('click', function(){
      const pressed = document.getElementById('pressed');
      pressed.value += this.value + '|';
      console.log(pressed.value)
      
      if(pressed.length >= 1){ 
        console.log(pressed.length)     
        if (pressed.value== 'FACE'){
        
            this.props.history.push('/marionette');
                }else{
                  console.log(pressed.value)
        
  }
 }else{
   console.log(pressed.value)
 }
})
}
}


render(){
  

  







const ul = {
  position: "relative",
  padding: "0",
  margin: "0 0 10px",
  display: "inline-block",
  fontSize: "0"
}

const h1h2 = {
  
    color: "#646464",
    lineHeight: "1.2",
    margin: "0 0 1rem",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.25)"
  
}

const h1bh2b = {
  color: "#640000",
  textShadow: "0px 1px 5px #CCC"

}

const h1 = {
  fontFamily: "cursive",
  fontSize: "3rem"
}

const li = {
  
    fontSize: "16px",
    fontSize: "1rem",
    background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MwYzFiZCIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZjBmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmFmMGU2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g')",
    background: "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #c0c1bd), color-stop(10%, #f0f0f0), color-stop(100%, #faf0e6))",
    background: "-moz-linear-gradient(top, #c0c1bd, #f0f0f0 10%, #faf0e6)",
    background: "-webkit-linear-gradient(top, #c0c1bd, #f0f0f0 10%, #faf0e6)",
    background: "linear-gradient(to bottom, #c0c1bd, #f0f0f0 10%, #faf0e6)",
    transition: "all 0.1s ease-in-out",
    padding: "0",
    margin: "0",
    display: "inline-block",
    border: "1px solid #ccc",
    padding: "220px 15px 50px",
    borderRadius: "0 0 5px 5px",
    boxShadow: "0 5px 5px #aaa",
    position: "relative",
    zIndex: "1",
    cursor: "pointer",
    color: "transparent",
  }

const liHover = {
  color: "#C0C1BD"
}

const liActive = {
  boxShadow: "none",
  top: "5px",
  color: "#333"
}

const liEbony = {
  zIndex: "2",
  position: "absolute",
  width: "32px",
  top: "0px",
  marginLeft: "-16px",
  padding: "130px 0px 10px",
  /* Typography */
  textAlign: "center",
  fontSize: "0.66667rem",
  color: "transparent",
  borderRadius: "0 0 2px 2px",
  borderWidth: "0 6px 12px",
  borderColor: "#000",
  borderBottomColor: "#424546",
  background: "#171C1A",
  background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzVmNjI2NSIvPjxzdG9wIG9mZnNldD0iMjUlIiBzdG9wLWNvbG9yPSIjMTUxYjE5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTcxYzFhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g')",
  background: "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #5f6265), color-stop(25%, #151b19), color-stop(100%, #171c1a))",
  background: "-moz-linear-gradient(#5f6265, #151b19 25%, #171c1a)",
  background: "-webkit-linear-gradient(#5f6265, #151b19 25%, #171c1a)",
  background: "linear-gradient(#5f6265, #151b19 25%, #171c1a)",
  boxShadow: "0 3px 5px #ccc, inset 0px 0px 0px 1px rgba(220, 220, 220, 0.2)"
}

const liEbonyHover = {
  color: "gainsboro"
}

const liEbonyActive = {
  background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzVmNjI2NSIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMTUxYjE5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTcxYzFhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g')",
  background: "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #5f6265), color-stop(50%, #151b19), color-stop(100%, #171c1a))",
  background: "-moz-linear-gradient(#5f6265, #151b19 50%, #171c1a)",
  background: "-webkit-linear-gradient(#5f6265, #151b19 50%, #171c1a)",
  background: "linear-gradient(#5f6265, #151b19 50%, #171c1a)",
  borderBottomWidth: "8px",
  paddingTop: "135px",
  color: "white"
}

const A = 'A';
const F = 'F';
const C = 'C';
const E = 'E';
return(
<div className="page">
<h1>Find My Face</h1>


{/* <input id='input'onKeyDown={this.handleKeyPress} value={this.value} onChange={evt => this.updateInputValue(evt)} type='text' />  */}
<ul onClick={this.handleKeyPress}className="scale-1">
  <li id='pressed'className="white key" value='C' datanote="c" >C</li>
  <li id='pressed'datanote="cs" value='2'className="ebony key">C# D♭</li>
  <li id='pressed'datanote="d" className="white key">D</li>
  <li id='pressed'datanote="ds" className="ebony key">D# E♭</li>
  <li id='pressed'className="white key"datanote="e">E</li>
  <li id='pressed'className="white key"  datanote="f">F</li>
  <li id='pressed'datanote="fs"className="ebony key">F# G♭</li>
  <li id='pressed'datanote="g" className="white key">G</li>
  <li id='pressed'datanote="gs" className="ebony key">G# A♭</li>
  <li id='pressed'className="white key"datanote="a">A</li>
  <li id='pressed'datanote="as" className="ebony key">A# B♭</li>
  <li id='pressed'datanote="b" className="white key">B</li>
  </ul> 


</div>
  )
 }
}




export default Keyboard;

