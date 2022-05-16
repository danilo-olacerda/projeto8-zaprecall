export default function Decks({setShowDecks}) {


    const getInputValue = (event)=>{
        const userValue = event.target.value;
        setShowDecks(userValue);
    };

    return (
    <>
        <select name="select" className="deckselector" onChange={getInputValue}>
            <option value="none">Escolha seu deck</option>
            <option value="deck1">React</option>
            <option value="deck2">Javascript</option>
        </select>
    </>
    )
}