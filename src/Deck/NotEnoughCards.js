import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function NotEnoughCards({cardLength, deckId}){
    return (<div>
        <h2>Not Enough Cards.</h2>
        <p>There must be at least 3 cards to study. There are {cardLength} cards in this deck.</p>
        <Link to= {`/decks/${deckId}/cards/new`} class="btn btn-primary">Add Cards</Link>
    </div>)   
}

export default NotEnoughCards;