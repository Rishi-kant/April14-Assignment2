 import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./pages/Header";
import "./Mainfile.css"
function App() {
  return (
    <div >
       <div  className="header">
        <Header/>
       </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route   path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
