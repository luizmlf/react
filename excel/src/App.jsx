import ExcelReader from './ExcelReader';
import './App.css'
import {useFetch} from './hooks/useExcel'
import {useState, useEffect} from 'react'



const url = "http://localhost:3000/dados";

function App() {

  const [dados, setDados] = useState([]);
  const [name, setName] = useState("");
  const [job, setJob] = useState(""); 

  // 1 - Resgatando Dados
  const {data : items, httpConfig, loading} = useFetch(url);
  console.log(items)
  //2 - Adiconando produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      job
    }

    httpConfig(dado, "POST");

    setName("");
    setJob("");

  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <h1>Read Excel Data in React</h1>
      {/*<ExcelReader />*/}
      <ul>
        
        {items.map((dado) => (<li>{dados.name}</li>))}
      </ul>
    </>
  )
}

export default App
