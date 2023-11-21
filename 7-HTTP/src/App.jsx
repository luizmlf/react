import './App.css';

import {useState, useEffect} from 'react';
import {useFetch} from './hooks/useFetch'
import ExcelUploader from './components/ExcelUploader';


const url = "http://localhost:3000/products";


function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  

  // 1 - Resgatando Dados
  const {data : items, httpConfig, loading} = useFetch(url);

{/*
  useEffect(() => {

    async function fetchData() {

      const res = await fetch(url);
      
      const data = await res.json();

      setProducts(data);
  }

  fetchData();
 
  }, []);
 */}

  //2 - Adiconando produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    httpConfig(product, "POST");

  {/*
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    

    //3 - Carregamento Dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
*/}


    setName("");
    setPrice("");

  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };
  

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/*6 - Loading*/}
      {loading && <p>Carregando...</p>}
      <ul>
        {items && items.map((products)=> (<li key={products.id}>{products.name} - R$: {products.price}<button onClick={() => handleRemove(products.id)}>Excluir</button></li>))}
        
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            <span>Preço: </span>
            <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}  />
          </label>

          <input type="submit" value='criar' />

        </form>
      </div>

      

    </>
  )
}

export default App
