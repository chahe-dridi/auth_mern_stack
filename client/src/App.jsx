import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
 import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
   
      <BrowserRouter>
      <Routes>
          <Route path='/register' element={<Signup/>} >    </Route>
          <Route path='/login' element={<Login/>} >    </Route>
      
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
