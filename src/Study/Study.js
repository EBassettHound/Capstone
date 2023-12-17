import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import {useParams, Link} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NotEnoughCards from "../Deck/NotEnoughCards";

function Study(){
    const {deckId} = useParams();
    const [deck, setDeck] = useState({cards:[]})
    const fetchDeck =() => {readDeck(deckId).then(data => setDeck(data))}
    useEffect(fetchDeck, []);
    const [cardText, setCardText]= useState("");
    const [cardIndex, setCardIndex] = useState(0);    
    const [isBack, setIsBack] = useState(false);
    const cardList = deck.cards;
    let history=useHistory();      
    
    const clickHandler=()=> {
        if((cardIndex+1) === cardList.length){
          if  (window.confirm("Restart cards?\nClick 'cancel' to return to the home page.")){
            setIsBack(!isBack)
            setCardIndex(0); 
          }
          else{ history.push("/") }
        }
        else{
        setIsBack(!isBack)
        setCardIndex(cardIndex + 1)
        }}



    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li key = {'home'} class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li key = {deck.id} class="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li key = {deck.name} class="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>  
        <h1>Study: {deck.name}</h1>
        { cardList.length>2 ? 
       ( <div class="card"> 
            <div class="card-body">
                <h4 class="card-title">Card {cardIndex +1} of {cardList.length}</h4>
                <p class="card-text">
                {deck.id && (isBack ? deck.cards[cardIndex].back : deck.cards[cardIndex].front)}
                </p>
                <button class="btn btn-primary mx-2" onClick={()=> setIsBack(!isBack)}>Flip</button>
                {isBack && <button class="btn btn-secondary" onClick={clickHandler}>Next</button>}
            </div>
        </div>)
: 
    (<NotEnoughCards deckId = {deck.id} cardLength = {cardList.length}/>)}
    </div>
    )
}

export default Study;