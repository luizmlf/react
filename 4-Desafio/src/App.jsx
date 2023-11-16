import './App.css'
import Title from './components/Title'
import UserDetails from './components/UserDetails'

function App() {

  const dados =[
    {id: 1, nome: "Luiz", age:25, profissao: "Pedreiro"},
    {id: 2, nome: "Gabriel", age:17, profissao: "Químico"},
    {id: 3, nome: "Eduardo", age:18, profissao: "Empresário"},
    {id: 4, nome: "Lucas", age:15, profissao: "Físico"},
    {id: 5, nome: "Victor", age:23, profissao: "Químico"},
    {id: 6, nome: "Arthur", age:16, profissao: "Médico"},
  ]

  return (
    <>
      
    <UserDetails dados={dados}/>

    <h2 style={5 < 7 ? ({color:"green"}) : ({color:"red"})}>Css inline condicional</h2>

    {/* CSS Modules */}
    <Title/>

    </>
  )
}

export default App
