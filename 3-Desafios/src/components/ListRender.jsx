import { useState } from 'react';

const ListRender = () => {

    const [list] = useState(["Luiz", "Eduardo", "Gabriel"])

    const [users, setUsers] = useState([
        {id: 1, name: "Luiz", age: 25},
        {id: 2, name: "Mateus", age: 19},
        {id: 3, name: "Gabriel", age: 23},
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter ((user) => randomNumber !== user.id);
        })
    }


  return (
    <>
        
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}>Delete um usuario</button>

    </>
  )
}

export default ListRender