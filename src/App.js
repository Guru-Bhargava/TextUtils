// import logo from './logo.svg';
// import { framework } from 'passport';
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  const[mode,setMode]=useState('light')//whether dark mode is enabled or not

  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
      document.title='TextUtils-DarkMode'
      // setInterval(() => {
      //   document.title='This is usually used to blink'
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-LightMode";
    }
  }


  return (
    <>
    <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode} ></Navbar>
    <Alert alert={alert} />
    <div className="container my-3"></div>
    <TextForm heading="Enter the Text Below to Analyze" showAlert={showAlert} mode={mode}/>
    {/* <Router>
      <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode} ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Enter the Text Below to Analyze" showAlert={showAlert} mode={mode}/>}/>
        </Routes>
      </div>
    </Router> */}
    </>
  );
}

export default App;





