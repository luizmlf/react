
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <MyForm user={{name: "Luiz", email:"luiz@mlf.net.br", bio:"Bio teste23", role:"admin"}}/>
    </>
  )
}

export default App
