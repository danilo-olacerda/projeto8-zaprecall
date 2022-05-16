export default function FinalButton ({setScreen}) {
    return (
        <button className="restartButton" onClick={()=>setScreen(1)}><h4>REINICIAR RECALL</h4></button>
    )
}