import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/CreateBook'
import Delete from './pages/DeleteBook'
import Edit from './pages/EditBook'
import Home from './pages/Home'
import Show from './pages/ShowBook'
import AppRoutes from './types/enum/routes'


const App = () => {
  return (
    <Routes>
      <Route path={`${AppRoutes.HOME}`} element={<Home/>} />
      <Route path={`${AppRoutes.SHOW}/:id`} element={<Show/>} />
      <Route path={`${AppRoutes.CREATE}`} element={<Create/>} />
      <Route path={`${AppRoutes.EDIT}/:id`} element={<Edit/>} />
      <Route path={`${AppRoutes.DELETE}/:id`} element={<Delete/>} />
    </Routes>
  )
}

export default App