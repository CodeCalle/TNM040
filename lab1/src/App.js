import './App.css'
import CountryInfo from './CountryInfo'
import countries from 'world-countries'

function App () {
  return (
    <div className='App'>
      <CountryInfo country={countries} />
    </div>
  )
}

export default App
