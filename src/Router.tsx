import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Tasks from './pages/Tasks'

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/tasks' element={<Tasks />} />
    </Routes>
  )
}

export default Router