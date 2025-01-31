import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Vehicle from './pages/Vehicle'
import About from './pages/Aboutus'
import Contact from './pages/Contactus'
import Pagenotfound from './pages/PageNotFound'
import Success from './pages/Success'
import Booking from './pages/Booking'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vehicle" element={<Vehicle/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/*" element={<Pagenotfound />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App