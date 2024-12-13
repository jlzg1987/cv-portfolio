import { useState } from 'react'
import BarMainPager from './pages/Var'
import Principal from './pages/principal'
import AbautMe from './pages/abautMe'
import Habilidades from './pages/habilidades'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='ConterMain'> 
   
          <BarMainPager/>
          <Principal/>
          <AbautMe/>
          <Habilidades/>
      </div>
      
    </>
  )
}

export default App
