import logo from './logo.svg';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Example from './Example.js';
import Example1 from './Example1.js';
import Hello from './Hello.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<Route exact path="/" element={<Example1/>}/>
<Route  path="Hello" element={<Hello/>}/>
</Routes>
        </Router>
     </div>
    );
  }
  export default App;