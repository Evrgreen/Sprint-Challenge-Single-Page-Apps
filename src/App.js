import React from "react";
import {Route,Link,Switch} from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters" component={CharacterList}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </main>
  );
}
