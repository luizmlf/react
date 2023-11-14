import {useState} from 'react'

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name, setName] = useState("Luiz")

    return (
        <>

            {x && <p>Se X for true, exibe!</p>}
            <button onClick={()=> setName("Luiz")}>Luiz</button>
            {name === "Luiz" ? (<p>O nome é Luiz!</p>) : (<p>O nome não é Luiz.</p>)}
            <button onClick={()=> setName("Pipipi")}>!Luiz</button>
        </>
    )
}

export default ConditionalRender