import PlayScreen from "./PlayScreen";
import StartScreen from "./StartScreen";
import React from "react";

export default function App() {
    const [screen, setScreen] = React.useState(1);
    const [showButton, setShowButton] = React.useState(0);
    const [showDecks, setShowDecks] = React.useState(0);

    function change (s) {
        setScreen(s);
    }

    return (
        <>
        {screen===1 ? <StartScreen change={change} showButton={showButton} setShowButton={setShowButton} showDecks={showDecks} setShowDecks={setShowDecks}/> : <PlayScreen setScreen={setScreen} showButton={showButton} showDecks={showDecks}/>}
        </>
    )
}