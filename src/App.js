import React from "react";
import Nav from "./components/Nav";
import Index from "./components/pages/Index";
import { Routes, Route } from "react-router-dom";
import Users from "./components/pages/Users";
import Claim from "./components/pages/Claim";
import Sample from "./components/pages/Sample";
import Encounter from "./components/pages/Encounters";
import Map from "./components/pages/Map";


const App = () => {
  return (
    <div className="app">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/users" element={<Users />} />
          <Route path="/claim" element={ <Claim /> } />
          <Route path="/sample" element={ <Sample /> } />
          <Route path="/encounters" element={ <Encounter /> } /> 
          <Route path="/map" element={ <Map /> } />
        </Routes>
    </div>
  );
};

export default App;
