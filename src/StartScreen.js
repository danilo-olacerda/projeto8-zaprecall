import React from "react";
import Decks from "./Decks";

export default function StartScreen({change, showButton, setShowButton, showDecks, setShowDecks}){

    const getInputValue = (event)=>{
        const userValue = event.target.value;
        setShowButton(userValue);
    };

    return (
        <div className="screen1">
            <img src="assets/logo-figma.png" alt=""/>
            <h1>ZapRecall</h1>
            <Decks setShowDecks={setShowDecks}/>
            <input type="text" className="zapsInput" onChange={getInputValue} placeholder="Digite sua meta de zaps..."/>
            {showButton==0 || showButton>8 || showDecks==0 || showDecks=="none" ? <button onClick={() => change(2)} disabled><p>Iniciar Recall!</p></button> : <button onClick={() => change(2)}><p>Iniciar Recall!</p></button>}
        </div>
    )
}