import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './components/reuseable/static/Header'

import './App.css'

function App() {

  return (
  <div>
  <BrowserRouter>
  <Header/>
  <Routes>
<Route path="/" element ={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route/>

  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
