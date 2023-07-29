import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
import PreHeader from './components/PreHeader/PreHeader'
import Home from './container/Home'
import About from './container/About'
import Contact from './container/Contact'
import Featured from './container/Featured'
import Gallery from './container/Gallery'
import Patient from './container/Patient'
const App = () => {
  
  return (
    <>  
    <Router>
      <PreHeader/>
      <Header/>
      <Routes>
        {/* <Route path='/' element= {<Home/> }/> */}
        <Route path='/about' element=  { <About/>}/>
        <Route path='/featured' element=  { <Featured/>}/>
        <Route path='/gallery' element=  {<Gallery/> }/>
        <Route path='/patient' element=  {<Patient/> }/>
        <Route path='/contact' element=  {<Contact/> }/>
      </Routes>
    </Router>
      <Home/>
      <About/>
      <Gallery/>
      <Patient/>
      <Contact/>
    </>
  )
}

export default App