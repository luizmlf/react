import './App.css';

import {useState, useEffect} from 'react';


function App() {

  const [products, setProducts] = useState([])

  const url = "http://localhost:3000/products"

  // 1 - Resgatando Dados
  useEffect(async() => {

    const res = await fetch(url)
    
    const data = await res.json()

    setProducts(data);

  }, []);

  console.log(products)

  return (
    <>
      <h1>Lista de Produtos</h1>
    </>
  )
}

export default App
