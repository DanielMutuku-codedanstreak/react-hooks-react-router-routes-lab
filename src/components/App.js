import React from "react";
import { Route, Switch, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar></NavBar>
    <Routes>
      <Route path="/movies" exact element={<Movies></Movies>}></Route>
      <Route path="/directors" exact element={<Directors></Directors>}></Route>
      <Route path="/actors" exact element={<Actors></Actors>}></Route>
      <Route path="/" exact element={<Home></Home>}></Route>
    </Routes>
  </div>;
}

export default App;
