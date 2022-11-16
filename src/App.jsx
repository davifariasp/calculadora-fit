import { useState, Fragment } from 'react'
import FormFit from './components/form'
import Resultado from './components/resultado'
import TabMacros from './components/tab_macros'
import Footer from './components/footer'
import './App.css'

function App() {
  const [tmb, setTmb] = useState(0)
  const [ndc, setNdc] = useState(0)
  const [peso, setPeso] = useState(0)
  const [pr, setPr] = useState('hidden')

  return (
    <Fragment>
      <div className="App container">
      <h1><strong>Calc</strong>Fit 💪🏻</h1>
      <p>Insira abaixo os dados para calcularmos sua taxa de metabolismo basal (TMB), sua necessidade diária de calorias (NDC) e a quantidade de macronutrientes diário.</p>

        <div className="form col col-lg-2">
          <FormFit 
            setTmb={setTmb}
            setNdc={setNdc}
            peso={peso} setPeso={setPeso}
            setPr={setPr}/>
        </div>
        <Resultado tmb={tmb} ndc={ndc} />
        <TabMacros tmb={tmb} ndc={ndc} peso={peso} pr={pr}/>
        
      </div>
      <br/>
      <Footer/>
    </Fragment>
    
  )

  //refs
  //https://blog.nutrium.com/pt/calculadora-equacao-harris-benedict-para-nutricionistas-brasil/
}

export default App
