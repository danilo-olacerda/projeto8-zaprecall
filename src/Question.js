export default function Question ({pergunta, resposta, i}) {


    return (
        <div className="question-card">
            <p>Pergunta {i+1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}