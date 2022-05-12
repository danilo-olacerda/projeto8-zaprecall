import PlayScreen from "./PlayScreen";
import StartScreen from "./StartScreen";
import React from "react";

export default function App() {
    const [screen, setScreen] = React.useState(1);
    
    function change (s) {
        setScreen(s);
    }

    return (
        <>
        {screen===1 ? <StartScreen change={change}/> : <PlayScreen/>}
        </>
    )
}