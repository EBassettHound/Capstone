import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { deleteCard } from "../utils/api";

function CardView({card, deck, fetchDeck}){
    // remove the card 
    const clickHandler = ()=>{if(window.confirm("Delete this card?\n You will not be able to recover it")){
        deleteCard(card.id)
        .then(fetchDeck)
    }}
    
    return(
    <div class="card">
        <div class="card-body d-flex">
            <div class="col">
                <p class="card-text">
                {card.front}
                </p>
            </div>
            <div class="col">
                <p class="card-text">{card.back}</p>
                <button type="button" class="btn btn-danger float-right ml-2" onClick={clickHandler}>Delete</button>
                <Link 
                to={`/decks/${deck.id}/cards/${card.id}/edit`} 
                class= "btn btn-secondary float-right">
                    Edit
                    </Link>
            </div>
        </div>
    </div>
)}

export default CardView;