import { Routes, Route } from 'react-router-dom';
import './App.css'

import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';

import { Button, Badge } from 'react-bootstrap';
import Home from './pages/Home';
import Cryptocurrencies from './pages/Cryptocurrencies'
import Cryptocurrency from './pages/Cryptocurrency'
import Exchanges from './pages/Exchanges'
import News from './pages/News'


function App() {

  return (
    <div className="App">
      <Navigationbar />

      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
        
        <Route path='/:cryptoID' element={<Cryptocurrency />} />
        
        <Route path='/exchanges' element={<Exchanges />} />

        <Route path='/news' element={<News />} />

      </Routes>

      <Footer />
      
    </div>
  )
}

export default App
