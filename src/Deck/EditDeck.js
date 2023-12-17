import React from "react";
import { updateDeck, readDeck } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import DeckForm from "./DeckForm";

function EditDeck(){

    const {deckId} = useParams();
    const [deck, setDeck] = useState({cards:[]})
    const fetchDeck=() =>{ readDeck(deckId).then(data => setDeck(data))}
    useEffect(fetchDeck, []);

    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Edit Deck</li>
            </ol>
        </nav>
        
        {deck.id &&
        <DeckForm 
            onSubmit={updateDeck}
            submitButtonText="Save"
            initialFormData={deck}/>
        }
    </div>
    )
}

export default EditDeck;