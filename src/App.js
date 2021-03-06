import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/TutoReact" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
   );
}
 
export default App;
