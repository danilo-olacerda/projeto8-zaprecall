import Question from "./Question";
import React from "react";
import Final from "./Final";
import Order from "./Order";

let questions = [
    {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"}, 
    {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"}, 
    {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"}, 
    {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"}, 
    {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"}, 
    {pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"}, 
    {pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "}, 
    {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}];

questions = questions.sort(() => Math.random() - 0.5);

export default function PlayScreen() {


    const [numberOfQuestions, setNumberOfQuestions] = React.useState(questions.length);
    const [numberOfZaps, setNumberOfZaps] = React.useState(0);
    const [order, setOrder] = React.useState([]);

    return (
        <div className="screen2">
            <span>
                <img src="assets/logo.png" alt="" />
                <p>ZapRecall</p>
            </span>

            <div className="questions">
                {questions.map((props, i) => <Question key={i} i={i} pergunta={props.pergunta} resposta={props.resposta} setNumberOfZaps={setNumberOfZaps} numberOfZaps={numberOfZaps} order={order} setOrder={setOrder}/>)}
            </div>

            <div className="questions-done">
                {numberOfZaps===numberOfQuestions ? <Final order={order}/>: <></>}
                <p>{numberOfZaps}/{numberOfQuestions} CONCLUÍDOS</p>
                <div className="orders">
                    {order.map((props, i) => <Order key={i} icon={props}/>)}
                </div>
            </div>
        </div>
    )
}