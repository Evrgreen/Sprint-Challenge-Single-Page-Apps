import React from "react";
import {Route,Link,Switch} from "react-router-dom";


import Header from "./components/Header.js";
import Home from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import CharacterCard from "./components/CharacterCard"


export default function App() {
  return (
    <main>
      <Header />
     
        <Route path="/characters/:characterID">
          <CharacterCard/>
        </Route>
        <Route path="/characters" component={CharacterList}/>
        <Route exact path="/" component={Home}/>
   
    </main>
  );
}
