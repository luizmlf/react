import { useState } from 'react'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Teste from './components/Botao.jsx'
import Accord from './components/Accord.jsx'
import Vertical from './components/Tablist.jsx'
import Horizontal from './components/Horizontal.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FluentProvider theme={webLightTheme}>
        <Horizontal />
      </FluentProvider>
    </>
  )
}

export default App
