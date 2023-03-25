import React, { useState } from 'react'
import './App.css'
import CountryInfo from './components/CountryInfo'
import countries from 'world-countries'

// const i = 0

function App () {
  countries.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = countries.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  const [number, setNumber] = useState(0)

  const increment = (event) => {
    setNumber(number + 1)
  }
  const decrement = (event) => {
    setNumber(number - 1)
  }

  return (
    <div className='App'>
      <div className='country'>
        <button onClick={increment} className='button'>
          Add One!
        </button>
        <button onClick={decrement} className='button'>
          Remove One!
        </button>
        <h1>Current number is: {number}</h1>
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
