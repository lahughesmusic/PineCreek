import React, { component } from 'react';
import './Keyboard.css';



class Keyboard extends Component {
constructor(){
  super();
  this.state = {
    isPlayed = false,
    
  };

  this.onChange = this.onChange.bind(this);
}  

componentWillReceiveProps() {
  if(this.state.isPlayed){
    

  }
}

render(){
<div className="page">
<h1>Find My Face</h1>


  
<ol className="scale-1">
  <li isPlayed={this.state.isPlayed}value="3" data-note="c" >C</li>
  <li data-note="cs" className="ebony">C# D♭</li>
  <li data-note="d">D</li>
  <li data-note="ds" className="ebony">D# E♭</li>
  <li isPlayed={this.state.isPlayed}value="4" data-note="e">E</li>
  <li isPlayed={this.state.isPlayed}value="1" data-note="f">F</li>
  <li data-note="fs" className="ebony">F# G♭</li>
  <li data-note="g">G</li>
  <li data-note="gs" className="ebony">G# A♭</li>
  <li isPlayed={this.state.isPlayed}value="2" data-note="a">A</li>
  <li data-note="as" className="ebony">A# B♭</li>
  <li data-note="b">B</li>
</ol> 


</div>
 }
}



export default Keyboard;

