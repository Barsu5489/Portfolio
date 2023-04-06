import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Works from "./Works";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/works" element={<Works/>} />

     
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
