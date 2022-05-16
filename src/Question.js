import React from "react"
export default function Question ({pergunta, resposta, i, setNumberOfZaps, numberOfZaps, order, setOrder}) {

    const [cardSide, setCardSide] = React.useState(1);
    const [option, setOption] = React.useState();

    function turnCard (s, str) {
        setCardSide(s);
        if (s===4){
            setNumberOfZaps(numberOfZaps+1);
            setOption(str);
            setOrder([...order, str]);
        }
    }

        if (cardSide===1) {
            return (
                <div className="question-card" onClick={() => turnCard(2)}>
                    <p>Pergunta {i+1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )
        } else if (cardSide===2){
            return (
                <div className="question-card-question" onClick={() => turnCard(3)}>
                    <p>{pergunta}</p>
                    <img src="assets/setinha-figma.png" alt="" />
                </div>
            )
        } else if (cardSide===3){
            return (
                <div className="question-card-answer">
                    <p>{resposta}</p>
                    <span className="zap-buttons">

                        <button className="wrong-button" onClick={() => turnCard(4,'close-circle')}>
                            <h3>Não lembrei</h3>
                        </button>
                        <button className="half-button" onClick={() => turnCard(4,'help-circle')}>
                            <h3>Quase não lembrei</h3>
                        </button>
                        <button className="zap-button" onClick={() => turnCard(4,'checkmark-circle')}>
                            <h3>Zap!</h3>
                        </button>

                    </span>
                </div>
            )
        } else if (cardSide===4) {
            return (
                <div className={`question-card done ${option}`}>
                    <p>Pergunta {i+1}</p>
                    <ion-icon name={option}></ion-icon>
                </div>
            )
        }
}