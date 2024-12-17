import { useState } from 'react'
import BarMainPager from './pages/Var'
import Principal from './pages/principal'
import AbautMe from './pages/abautMe'
import Habilidades from './pages/habilidades'
import Portafolio from './pages/portafolio'
import Contacto from './pages/ContactPage'

function App() {

  return (
    <>
      <div className='ConterMain'>

        <BarMainPager />
        <Principal />
        <AbautMe />
        <Habilidades />
        <Portafolio />
      
        <Contacto />

      </div>

    </>
  )
}

export default App
