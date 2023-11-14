const Challenge = () =>{

    const a = 10;
    const b = 15;

    return(
        <>
            <div>A soma de {a} + {b} = {a + b}</div>

            <button onClick={() => {console.log(a+b)}}>Clique aqui para exibir a soma no console</button>
            
        </>
    )
}

export default Challenge;