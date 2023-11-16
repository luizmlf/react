import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {

    const [name, setName] = useState(user? user.name : "")
    const [email, setEmail] = useState(user? user.email : "")
    const [bio, setBio] = useState(user? user.bio : "");
    const [role, setRole] = useState(user? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Enviando o formulario")
        console.log(name, email, bio, role)
        setName("");
        setEmail("");
        setBio("");
        setRole("user");
    }

    

  return (
    <>
    {   /*Envio de Forms*/}
        {/**Criação de form padrãop*/}
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite seu nome" value={name} onChange={handleName}/>   

        {/**Label envolvendo input*/}        
        
            <label>
                <span>E-mail:</span>
                <input type="text" name="name" placeholder="Digite seu email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </label>
        
            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder="descricao" value={bio} onChange={(e) => setBio(e.target.value)}>

                </textarea>
            </label>

            <label>
                <span>Escolha</span>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="admin">Administrador</option>

                    <option value="visitor">Visitante</option>
                </select>
            </label>
          
            





            <input type="submit" value="Enviar"/>
        </form>

        
        
        

    </>
  
  )
}

export default MyForm