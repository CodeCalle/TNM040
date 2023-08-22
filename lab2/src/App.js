import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryList from './components/CountryList'
import NoPage from './components/NoPage'
import CountryDetails from './components/CountryDetails'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CountryList />} />
        {/* <Route index element={<Home />} /> */}
        <Route path='/country/:cca3' element={<CountryDetails />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
