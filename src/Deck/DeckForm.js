import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function DeckForm({initialFormData, onSubmit, submitButtonText}){
    // 3 props to handle the initial form and what happens on submit
    const history = useHistory();
    const [formData, setFormData]=useState(initialFormData)

    const inputHandler =(event)=>{setFormData({ ...formData,[event.target.name]: event.target.value})}

    function submitHandler(event){
        event.preventDefault();
        onSubmit(formData)
        .then(data =>
            history.push(`/decks/${data.id}`))
        }

    return (
    <div class="w-100">
        
        <form onSubmit={submitHandler}>
            <div class="form-group">
            <label htmlFor="name">
                Name
            </label>
            <input 
                type="text" 
                class="form-control" 
                id="name" 
                name="name" 
                onChange={inputHandler}
                value={formData.name}
                placeholder="Deck Name" />
            </div>
            <div class="form-group">
            <label htmlFor="description">
                Description  
            </label>
            <textarea 
                id="description" 
                class="form-control" 
                name="description" 
                rows={7} 
                onChange={inputHandler}
                value={formData.description}
                placeholder="Brief description of the deck" />            
            </div>
            <button type="submit">{submitButtonText}</button>
        </form>
    </div>)}

export default DeckForm;