import './UserDetails.css';

const UserDetails = ({dados}) => {    

    return (
    <>
        
        <ul>
            {dados.map((dados) => ( 
                <li key={dados.id}>
                    {dados.nome} - {dados.age} - {dados.profissao} {(dados.age >= 18) && <span className="Cnh"> - Pode tirar CNH!!</span>}
                </li>))}
        </ul>

    </>    
    )
}

export default UserDetails