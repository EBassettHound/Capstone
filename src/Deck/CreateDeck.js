import React from "react";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import { Link } from "react-router-dom/cjs/react-router-dom";
function CreateDeck(){

    return(
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>                
            </ol>
        </nav>

        <DeckForm 
            onSubmit={createDeck}
            submitButtonText="Submit"
            initialFormData={ {
            name: '',
            description: '',
            } }/>
    </div>
    )}

export default CreateDeck;