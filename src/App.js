import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Daftar from "./pages/daftar";
import Login from "./pages/login";
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
       <Route path="/daftar" element={<Daftar />}></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
