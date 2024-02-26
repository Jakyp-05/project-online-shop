import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import {Home} from './pages/index'

function App() {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
