import React,{useState} from 'react'


export default function TextForm(props) {
  const[text, setText] = useState("");

  const handleResetClick = () =>{
    let newText="";
    setText(newText);
    props.showAlert("Reset done","success");
  }

  const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleLoClick = () =>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==="light"?"white":"black", color: props.mode==="light"?"black":"white"} } onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleResetClick}>Reset</button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}> 
    <br />
      <h2>Summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*(text.split(" ").length-1)} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
