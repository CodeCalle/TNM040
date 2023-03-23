import './App.css'
import CountryInfo from './CountryInfo'
import countries from 'world-countries'

function App () {
  countries.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = countries.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  return (
    <div className='App'>
      <div className='country'>
        {filteredFifteen.map(item => {
          return (
            <CountryInfo country={item} key={item.id} largestCountryByArea={filteredFifteen[0].area} />
          )
        })}
      </div>
    </div>
  )
}

export default App
