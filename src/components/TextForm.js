import React, {useState} from "react";


export default function TextForm(props) {
  const [text, setText] = useState('');
  const [find, fText] = useState('');
  const [replace, rText] = useState('');

  // setText("new text")
  const handleUpClick=()=>{
    // console.log("UpperCase was clicked : " + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  }
  const handleClClick=()=>{
    let newText = "";
    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("On change")
    setText(event.target.value)
  }
  const handleFindChange=(event)=>{
    fText(event.target.value)
  }
  const handleReplaceChange=(event)=>{
    console.log(rText(event.target.value))
  }
  const handleRClick=()=>{
    let newText = text.replaceAll(find,replace);
    setText(newText);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}
  
return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
       <h3> {props.title}</h3>
      <div className='mb-3'>
        <textarea className="form-control" id="my-box" value={text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        <textarea className="find-word mx-2 my-2" id="my-box" value={find} onChange = {handleFindChange} rows="1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        <textarea className="replace-word mx-2 my-2" id="my-box" value={replace} onChange = {handleReplaceChange} rows="1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert text to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert text to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleRClick}>Replace Word</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary </h1>
      <p>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter you text to preview"}</p>
    </div>
    </>
  );
}
