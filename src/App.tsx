import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center">
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
