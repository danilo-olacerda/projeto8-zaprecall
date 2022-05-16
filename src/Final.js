export default function Final ({order, showButton}) {

    let state='';
    let numberOfRights=0;
    for (let i=0; i<order.length; i++){
        if (order[i]==="checkmark-circle"){
            numberOfRights++;
        }
    }

    if (numberOfRights<showButton) {
        state="bad";
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
                    <h3>Você bateu sua meta de flashcards!
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