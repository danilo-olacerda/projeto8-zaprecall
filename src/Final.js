export default function Final ({order}) {

    let state;
    for (let i=0; i<order.length; i++){
        if (order[i]==="close-circle"){
            state="bad";
            break;
        }
    }

    function Bad () {
        return (
            <div className="final">
                <span>
                    <p>😢 Putz...</p>
                </span>
                    <h3>Ainda faltam alguns...
                    Mas não desanime!
                    </h3>
            </div>
        )
    }

    function Good () {
        return (
            <div className="final">
                <span>
                    <p>🥳 Parabéns!</p>
                </span>
                    <h3>Você não esqueceu de nenhum flashcard!
                    </h3>
            </div>
        )
    }



    return (
        <>
            {state==="bad" ? <Bad />: <Good />}
        </>
    )
}