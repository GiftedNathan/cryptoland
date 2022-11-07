import { Routes, Route } from 'react-router-dom';
import './App.css'

import Navigationbar from './components/Navigationbar';

import { Button, Badge } from 'react-bootstrap';
import Home from './pages/Home';
import Cryptocurrencies from './pages/Cryptocurrencies'
import Cryptocurrency from './pages/Cryptocurrency'
import Exchanges from './pages/Exchanges'


function App() {

  return (
    <div className="App">
      <Navigationbar />

      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/cryptocurrencies' element={<Cryptocurrencies />}>
          <Route path='/cryptocurrencies/:cryptoID' element={<Cryptocurrency />} />
        </Route>
        
        <Route path='/exchanges' element={<Exchanges />} />

      </Routes>

      
    </div>
  )
}

export default App
