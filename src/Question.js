import React from "react"
export default function Question ({pergunta, resposta, i, setNumberOfZaps, numberOfZaps}) {


    //VARIAVEL DE ESTADO 1 2 3 PARA SABER QUAL ESTAGIO DA PERGUNTA ESTÁ
    //CHAMAR A FUNÇÃO ANONIMA () => FUNCAO* (1/2/3)
    //CRIAR FUNCAO* COM CONDIÇÃO SE 1 SE 2 OU SE 3
    //CRIAR FUNÇÃO QUE CONTABILIZA OS PONTOS

    //FAZER ARRAY COM SPREAD PARA OS ACERTOS EX: [... CERTO, ERRADO];
    //SE O ARRAY DE PERGUNTAS.LENGTH FOR DO TAMANHO DO ARRAY ACIMA SAIR O RESULTADO  NO COMPONENTE

    const [cardSide, setCardSide] = React.useState(1);


    function turnCard (s) {
        setCardSide(s);
        if (s===4){
            setNumberOfZaps(numberOfZaps+1);
        }
    }

    function Side () {
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

                        <button className="wrong-button" onClick={() => turnCard(4)}>
                            <h3>Não lembrei</h3>
                        </button>
                        <button className="half-button" onClick={() => turnCard(4)}>
                            <h3>Quase não lembrei</h3>
                        </button>
                        <button className="zap-button" onClick={() => turnCard(4)}>
                            <h3>Zap!</h3>
                        </button>

                    </span>
                </div>
            )
        } else if (cardSide===4) {
            return (
                <div className="question-card">
                    <p>Respondida {i+1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )
        }
    }

    return (
         <Side />
    )
}