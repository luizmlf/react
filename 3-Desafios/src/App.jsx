import './App.css'
import Teste from './components/Teste'
import City from './assets/City.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'

function App() {

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
    </>
  )
}

export default App
