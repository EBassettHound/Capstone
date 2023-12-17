import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import DeckDisplay from "../Deck/DeckDisplay";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Study from "../Study/Study";
import CreateDeck from "../Deck/CreateDeck";
import EditDeck from "../Deck/EditDeck";
import React from "react";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
      {/* All routes except those used in DeckScreen */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>         
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckDisplay />
          </Route>          
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;