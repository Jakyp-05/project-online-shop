import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

import {HomePage} from './pages/index'

function App() {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
