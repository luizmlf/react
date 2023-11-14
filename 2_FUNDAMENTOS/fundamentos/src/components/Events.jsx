const Events = ( ) =>{

    const handleMyEvent = () => {
        console.log("Ativou o evento");

    };

    const renderSomething = (x) => {
        if(x){

            return <h1>Renderizando isso</h1>

        } else {

            return <h1>Renderizando isso agora</h1>
    } 
    }

    return(
        <div>

            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>

            </div>

            <div>
                <button onClick={()=> console.log("clicou.")}>Clique Aqui Também!.</button>

            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;