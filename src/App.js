import React from "react";
import GlobalStyles from "./GlobalStyles";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./pages/Home";
import {About} from "./pages/About";
import Nav from "./Nav";


function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
   </Routes>
   <GlobalStyles/>
   
   </BrowserRouter>
  );
}




export default App;
