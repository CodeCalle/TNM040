import './App.css'
import CountryInfo from './components/CountryInfo'
import countries from 'world-countries'

let i = 0

function App () {
  countries.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = countries.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  const buttonTest = event => {
    i++
    console.log(i)
  }

  return (
    <div className='App'>
      <div className='country'>
        <button onClick={buttonTest} className='button'>
          Test Me!
        </button>
        <h1>This is the 15 biggest countries on Earth!</h1>
        {filteredFifteen.map((item, index) => {
          return (
            <CountryInfo country={item} key={item.id} detailed={index < 5} largestCountryByArea={filteredFifteen[0].area} />
          )
        })}
      </div>
    </div>
  )
}

export default App
