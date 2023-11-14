import {useState} from 'react'

const ManageData = () => {
  let someData = 10;

  console.log(someData)
  const [number, setNumber] = useState(someData);

  return (
    <>
    <div>
      <button onClick={() => setNumber(10)}>Mudar valor</button>
    </div>

    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(25)}>Mudar valor</button>
    </div>

    </>
  )
}

export default ManageData