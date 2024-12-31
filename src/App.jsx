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
import Telecomunicaciones from './pages/telecomunicaciones'
import { NieveEffect } from './assets/NieveEffect'

function App() {


  return (
    <>
      <div className='ConterMain'>
 
        <BarMainPager />
        <SolLuna/>
        <ToolBar/>
        <Principal />
        <AbautMe />
        <Habilidades />
        <Portafolio />
        <Telecomunicaciones/>
        <Contacto />
        <Piepagina/>

      </div>

    </>
  )
}

export default App
