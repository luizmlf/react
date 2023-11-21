import {useFetch} from '../hooks/useFetch.jsx'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Home.css'




const Home = () => {

  const url = "http://localhost:3000/products"

  const {data: items, loading, error} = useFetch(url)

  return (
    <>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className='products'>
        {items && items.map((products) => (
          <li key={products.id}>
            <h2>{products.name}</h2>
            <p>R$: {products.price}</p>
            <Link to={`/product/${products.id}`}>Detalhes</Link>
          </li>))}
      </ul>
      

    </>
  )
}

export default Home