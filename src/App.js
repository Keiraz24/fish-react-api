import React from "react";
import './App.css';
import  Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar folder";
import Bird1 from "./components/pages/bird1";
import Bird2 from "./components/pages/bird2";

 
function App() {
  return (
    <div className="App">
    {/* <Home/> */}
       <Router>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/bird1' element={<Bird1 />} />
                <Route path='/bird2' element={<Bird2 />} />
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
