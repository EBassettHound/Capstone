import React from "react";
import { readCard, updateCard } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import CardForm from "./CardForm";

function EditCard({deck, fetchDeck}){

    const history=useHistory();
    const {cardId} = useParams();
    const [card, setCard] = useState();
    const fetchCard=() =>{ readCard(cardId).then(data => setCard(data));}
    useEffect(fetchCard, []);
    const onSubmit = (editedCard)=>{ updateCard(editedCard).then(fetchDeck) .then(() =>history.push(`/decks/${deck.id}`))}
 
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Edit card {cardId}</li>
                </ol>
            </nav>
            {card?.id &&
            <CardForm
                deck = {deck}
                onSubmit={onSubmit}
                submitButtonText="Submit"
                cancelButtonText="Cancel"
                formData={card}
                setFormData={setCard}/>
            }
        </div>
     )
    }

export default EditCard;