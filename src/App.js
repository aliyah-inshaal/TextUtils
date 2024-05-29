import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import React,{useState} from 'react'
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000);
  }

  const toggleMode =()=>{
      if(mode==="light"){
          setMode("dark");
          document.body.style.backgroundColor="#212529";
          showAlert("Dark mode enabled","success");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor="white";
        showAlert("Light mode enabled","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>      
    </>
  );
}

export default App;
