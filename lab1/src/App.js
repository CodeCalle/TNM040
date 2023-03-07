import './App.css'
import CountryInfo from './CountryInfo'
import countries from 'world-countries'

// console.log(countries)
function App() {
  return (
    <div className="App">
              <CountryInfo country={countries[0]}/>
    </div>
  );
}

export default App