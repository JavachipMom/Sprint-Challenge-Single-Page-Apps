import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Route 
        exact path="/search"
        component={SearchForm}
      />
      <Route 
        exact path="/" 
        component={WelcomePage} 
      />
      <Route 
        exact path="/Characters" 
        component={CharacterList} 
      />
    </main>
  );
}