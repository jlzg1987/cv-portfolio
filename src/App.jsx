import { useState } from 'react'
import BarMainPager from './pages/Var'
import Principal from './pages/principal'
import AbautMe from './pages/abautMe'
import Habilidades from './pages/habilidades'
import Portafolio from './pages/portafolio'
import Contacto from './pages/ContactPage'
import Piepagina from './pages/piepagina'
import ToolBar from './pages/toolBar'
import SolLuna from './pages/solLuna'

function App() {

  return (
    <>
      <div className='ConterMain'>
 

        <BarMainPager />
        <ToolBar/>
        <SolLuna/>
        <Principal />
        <AbautMe />
        <Habilidades />
        <Portafolio />
        <Contacto />
        <Piepagina/>

      </div>

    </>
  )
}

export default App
