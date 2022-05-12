export default function StartScreen({change}){
    return (
        <div className="screen1">
            <img src="assets/logo-figma.png" alt=""/>
            <h1>ZapRecall</h1>
            <button onClick={() => change(2)}><p>Iniciar Recall!</p></button>
        </div>
    )
}