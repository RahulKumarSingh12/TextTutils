import React, { useState } from 'react'


export default function TextForm(props) {
  
  let disabled=true;

  // text="set text"; //Wrong methods
  // setText("new text");

  const handleUpClick = () => {
    console.log(" Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  }

  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
    
  }

  const handleLowerClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");

  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text Cleared","success")
  }

  const handleCopy = () => {
    console.log(" I am copy ");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To ClipBoard","success");
  }

  const handleEntraSpaces = () => {

    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Extra spaces removed  !","success");

  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
        < h1 className='mb-2' >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} ></textarea>
        </div>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert To LowerCase</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleEntraSpaces}> Handle Extra Spaces </button>
      </div>
      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2> Your text summary </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  and {text.length} characters </p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{text.length>0?text:"Enter something to preview  "}</p>
      </div>
    </>
  )


}

// Split By white Spaces One or More or Newline /\s+/








