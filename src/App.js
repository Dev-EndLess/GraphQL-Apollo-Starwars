import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import StarshipList from "./components/StarshipList";
import StarshipDetails from "./components/StarshipDetails";
import PeopleList from "./components/PeopleList";
import PeopleDetails from "./components/PeopleDetails"
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={ <Menu/> }/>
          <Route path="/people" element={ <PeopleList/> }/>
          <Route path="/people/details/:id" element={ <PeopleDetails/> }/>
          <Route path="/starships" element={ <StarshipList/> }/>
          <Route path="/starship/details/:id" element={ <StarshipDetails/> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
