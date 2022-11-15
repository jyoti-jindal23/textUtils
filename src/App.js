// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d204e";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      {/* {<Router> */}
      <Navbar title="TextUtils" about="About" toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}> */}
          {/* </Route> */}
          {/* <Route path="/" element={<TextForm
          title="Enter text to ansalyze"
          showAlert={showAlert}
          mode={mode} />}> */}
            <TextForm
          title="Enter text to ansalyze"
          showAlert={showAlert}
          mode={mode} />
          
          {/* </Route> */}
      {/* </Routes> */}
      </div>
      {/* </Router>} */}
      </>
  );
}
export default App;
