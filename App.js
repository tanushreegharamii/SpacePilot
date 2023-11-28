import './App.css';
import React from "react";
import Home from "./Menus/Home";

import { Route ,  Routes} from "react-router-dom";
function App() {
  return (
   
    <>
      <Routes>
        <Route path ="/" Component={Home}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
