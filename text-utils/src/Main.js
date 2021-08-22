import React, { useState } from 'react';
import './Main.css';

function Main(props) {
  const [text, setText] = useState("Enter text here");
  const [countChar, setCountChar] = useState(15);
  const [countWords, setCountWords] = useState(3);
  const handleChange = (e) =>{
      setText(e.target.value);
      setCountChar(e.target.value.length);
    }
  const handleUpperCase = () => {
      setText(text.toUpperCase());
  }
  const handleLowerCase = () =>{
      setText(text.toLowerCase());
  }
  const handleCountWords = () =>{
      var i, spaceSoFar = 0;
      for(i = 1; i < text.length-1; i++){
          if(text.charAt(i) === " "){
              spaceSoFar++;
          }
      }
      if(i === 1)
      setCountWords(spaceSoFar);
      else
      setCountWords(spaceSoFar+1);
  }
  return (
    <div className="Main">
      <div className="container mb-3">
        <label for="exampleFormControlTextarea1" className={`form-label my-3 text-${props.mode === 'light'?'dark':'light'}`}>Enter your text to perform action</label>
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#08706e', color:props.mode === 'light'?'black':'white'}} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleChange}></textarea>
        <button type="button" className={`btn btn-${props.mode === 'light'?'primary':'dark'} my-3 mx-10`} onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" className={`btn btn-${props.mode === 'light'?'primary':'dark'} my-3 mx-10`} onClick={handleLowerCase}>Convert to Lowercase</button>
        <button type="button" className={`btn btn-${props.mode === 'light'?'primary':'dark'} my-3 mx-10`} onClick={handleCountWords}>Count words</button>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>Characters in Text = {countChar}</p>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>Words in Text = {countWords}</p>
      </div>
    </div>
  )
}

export default Main
