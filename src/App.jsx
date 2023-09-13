import { useState } from 'react'

import './App.css'
import {Sidebar} from './components/Sidebar.jsx'
import NavBar from './components/NavBar'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex flex-col flex-1 '>
       <NavBar/>
       <div className='grid sm:grid-cols-3 gap-2 grid-cols-1 py-5 px-3'>
        <div className=' col-span-2'><LeftColumn/></div>
        <div><RightColumn/></div>
       </div>
      </div>
    </div>
  )
}

export default App
