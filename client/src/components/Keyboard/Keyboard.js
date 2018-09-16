import React, { Component } from 'react';
import './Keyboard.css';
import img from './keyboard.png'


class Keyboard extends Component {

  
  state = {
   word: ''
  };




// updateInputValue(evt) {
//     this.setState({

//       inputValue: evt.target.value
//     });
//   }

// handleKeyPress = (event) => {
//   console.log(event.target.innerHTML);
//   const face = '';
//   // let testLetter = event.target.options[event.target.selectedIndex].text;
//   let letter = event.target.innerHTML;
//  // console.log(testLetter)
//  if(face == "FACE"){
//    console.log('correct');
//  }

//  console.log(`letter keyed is ${letter}`);
//  console.log(`the word guess so far is ${face}`);

 handleKeyPress = (event) => {
  
  
  let letter = event.target.innerHTML;

  this.setState({
    word: this.state.word + letter 
  })

  if(this.state.word === 'FAC' && letter === 'E') { 
    this.props.history.push('/secretdoor'); 
  }

  if(this.state.word === 'FACE') {
    console.log('correct');
    this.props.history.push('/secretdoor'); 
  } else {
    console.log('Almost there: '); 
    console.log(this.state.word); 
  }

  /**
  this.setState({
    word: this.state.word + letter 
  })
  **/
  
  console.log(this.state.word)
}


//   for  (let i = 0; i < 5; i++){
//   face[i].addEventListener('click', function(){
    
//   // const pressed = document.getElementById('pressed');
//   face.push(letter);
//   console.log(face)
  
//   if(face.length >= 4){
//   console.log(face)
//     if (face == 'FACE'){
  
//   this.props.history.push('/marionette');
//   }else{
//   console.log(letter)
  
//   }
//   }else{
//   console.log(letter)
//   }
//   })
// }
 
  
//  this.setState({
//    [inputValue]: letter
//  })
  // for  (let i = 0; i < face.length; i++){
  //   face[i].addEventListener('click', function(){
  //     const pressed = document.getElementById('pressed');
  //     pressed.value += this.value;
  //     console.log(pressed.value)
      
  //     if(pressed.length >= 1){ 
  //       console.log(pressed.length)     
  //       if (pressed.value== 'F|A|C|E|'){        
  //           this.props.history.push('/marionette');
  //               }else{
  //                 console.log(pressed.value)
        
//   // }
//  }else{
//    console.log(pressed.value)
//  }
// })




render(){
  

  







const ul = {
  position: "relative",
  padding: "0",
  margin: "0 0 10px",
  display: "inline-block",
  fontSize: "0"
}



const h1bh2b = {
  color: "#640000",
  textShadow: "0px 1px 5px #CCC"

}



const li = {
  
    fontSize: "16px",
    // // eslint-disable-next-line
    background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2MwYzFiZCIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZjBmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmFmMGU2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g')",
    // eslint-disable-next-line
    background: "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #c0c1bd), color-stop(10%, #f0f0f0), color-stop(100%, #faf0e6))",
    // eslint-disable-next-line
    background: "-moz-linear-gradient(top, #c0c1bd, #f0f0f0 10%, #faf0e6)",
    // eslint-disable-next-line
    background: "-webkit-linear-gradient(top, #c0c1bd, #f0f0f0 10%, #faf0e6)",
    // eslint-disable-next-line
    background: "linear-gradient(to bottom, #c0c1bd, #f0f0f0 10%, #faf0e6)",

    transition: "all 0.1s ease-in-out",
    // eslint-disable-next-line
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

  // eslint-disable-next-line
const liHover = {
  // eslint-disable-next-line
  color: "#C0C1BD"
  // eslint-disable-next-line
}
// eslint-disable-next-line
const liActive = {
  // eslint-disable-next-line
  boxShadow: "none",
  // eslint-disable-next-line
  top: "5px",
  // eslint-disable-next-line
  color: "#333"
  // eslint-disable-next-line
}
// eslint-disable-next-line
const liEbony = {
  // eslint-disable-next-line
  zIndex: "2",
  // eslint-disable-next-line
  position: "absolute",
  // eslint-disable-next-line
  width: "32px",
  // eslint-disable-next-line
  top: "0px",
  // eslint-disable-next-line
  marginLeft: "-16px",
  // eslint-disable-next-line
  padding: "130px 0px 10px",
  // eslint-disable-next-line
  /* Typography */
  textAlign: "center",
  // eslint-disable-next-line
  fontSize: "0.66667rem",
  // eslint-disable-next-line
  color: "transparent",
  // eslint-disable-next-line
  borderRadius: "0 0 2px 2px",
  // eslint-disable-next-line
  borderWidth: "0 6px 12px",
  // eslint-disable-next-line
  borderColor: "#000",
  // eslint-disable-next-line
  borderBottomColor: "#424546",
  // eslint-disable-next-line
  background: "#171C1A",
  // eslint-disable-next-line
  background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzVmNjI2NSIvPjxzdG9wIG9mZnNldD0iMjUlIiBzdG9wLWNvbG9yPSIjMTUxYjE5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTcxYzFhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g')",
  // eslint-disable-next-line
  background: "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #5f6265), color-stop(25%, #151b19), color-stop(100%, #171c1a))",
  // eslint-disable-next-line
  background: "-moz-linear-gradient(#5f6265, #151b19 25%, #171c1a)",
  // eslint-disable-next-line
  background: "-webkit-linear-gradient(#5f6265, #151b19 25%, #171c1a)",
  // eslint-disable-next-line
  background: "linear-gradient(#5f6265, #151b19 25%, #171c1a)",
  // eslint-disable-next-line
  boxShadow: "0 3px 5px #ccc, inset 0px 0px 0px 1px rgba(220, 220, 220, 0.2)"
// eslint-disable-next-line
}
// eslint-disable-next-line
const liEbonyHover = {
  // eslint-disable-next-line
  color: "gainsboro"
  // eslint-disable-next-line
}

const liEbonyActive = {
  // eslint-disable-next-line
  background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzVmNjI2NSIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMTUxYjE5Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMTcxYzFhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g')",
  // eslint-disable-next-line
  background: "-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #5f6265), color-stop(50%, #151b19), color-stop(100%, #171c1a))",
  // eslint-disable-next-line
  background: "-moz-linear-gradient(#5f6265, #151b19 50%, #171c1a)",
  // eslint-disable-next-line
  background: "-webkit-linear-gradient(#5f6265, #151b19 50%, #171c1a)",
  // eslint-disable-next-line
  background: "linear-gradient(#5f6265, #151b19 50%, #171c1a)",
  // eslint-disable-next-line
  borderBottomWidth: "8px",
  // eslint-disable-next-line
  paddingTop: "135px",
  // eslint-disable-next-line
  color: "white"
  // eslint-disable-next-line
}

// const A = 'A';
// const F = 'F';
// const C = 'C';
// const E = 'E';
return(
<div className="page">
<br />
<p id='musicnote'>hmm.. there's a note in <br /><br />place of music here. What <br /><br />could it mean?</p>
<img alt='alt'id='wordface' src={img} />
<br />
<br />

{/* <input id='input'onKeyDown={this.handleKeyPress} value={this.value} onChange={evt => this.updateInputValue(evt)} type='text' />  */}
<ul className="scale-1">
  <li onClick={this.handleKeyPress}id='pressed' className="white key"  lettername='C' datanote="c" >C</li>
  <li onClick={this.handleKeyPress}id='pressed' datanote="cs" className="ebony key">C# D♭</li>
  <li id='pressed'datanote="d" className="white key">D</li>
  <li id='pressed'datanote="ds" className="ebony key">D# E♭</li>
  <li onClick={this.handleKeyPress}id='pressed' className="white key" lettername='E' datanote="e">E</li>
  <li onClick={this.handleKeyPress}id='pressed' className="white key" lettername='F' datanote="f">F</li>
  <li id='pressed'datanote="fs" className="ebony key">F# G♭</li>
  <li id='pressed'datanote="g" className="white key">G</li>
  <li id='pressed'datanote="gs" className="ebony key">G# A♭</li>
  <li onClick={this.handleKeyPress}id='pressed' className="white key" lettername='A' datanote="a">A</li>
  <li id='pressed'datanote="as" className="ebony key">A# B♭</li>
  <li id='pressed'datanote="b" className="white key">B</li>
</ul> 


</div>
  )
 }
}





export default Keyboard;

