import './App.css'
import Teste from './components/Teste'
import City from './assets/City.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'

function App() {

  const cars = [
    {id:1, brand:"Mercedes", color: "Cinza", newCar: true, km:0},
    {id:2, brand:"Audi", color: "Preto", newCar: false, km:15000},
    {id:3, brand:"Bmw", color: "Azul", newCar: false, km:150000},
    {id:4, brand:"Volkswagen", color: "Prata", newCar: true, km:0},
    {id:5, brand:"Chevrolet", color: "Branco", newCar: false, km:46512},
    {id:6, brand:"Peugeot", color: "Verde", newCar: true, km:0},
    {id:7, brand:"Fiat", color: "Prata", newCar: false, km:98432},
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  }

  


  return (
    <>
      <Teste/>
      {/*Imagem na pasta public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem em assets ou outro diretório*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData/>

      <ListRender/>

      <ConditionalRender />

      <ShowUserName name="Matheus"/>


      <CarDetails brand="Volkswagen" km={135264} color="Preto" newCar={false}/>

      {cars.map((car) => (
        <CarDetails
          key={car.id} 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}
        />
      ))}

      <ExecuteFunction myFunction={showMessage}/>


    </>
  )
}

export default App
