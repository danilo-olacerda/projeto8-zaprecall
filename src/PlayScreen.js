import Question from "./Question";

export default function PlayScreen() {

    const questions = [{pergunta: 0, resposta: 0}, {pergunta: 1, resposta: 1}, {pergunta: 1, resposta: 1}, {pergunta: 1, resposta: 1}, {pergunta: 1, resposta: 1}, {pergunta: 1, resposta: 1}, {pergunta: 1, resposta: 1}, {pergunta: 1, resposta: 1}]


    return (
        <div className="screen2">
            <span>
                <img src="assets/logo.png" alt="" />
                <p>ZapRecall</p>
            </span>

            <div className="questions">
                {questions.map((props, i) => <Question key={i} i={i} pergunta={props.pergunta} resposta={props.resposta}/>)}
            </div>

            <div className="questions-done">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    )
}