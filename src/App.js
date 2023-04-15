 import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import AddNotes from "./pages/AddNotes";
import "./App.css"
function App() {
  return (
    <div >
       <div>
        <Header/>
       </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route   path="/notes" element={<AddNotes/>}/>
      </Routes>
    </div>
  );
}

export default App;
