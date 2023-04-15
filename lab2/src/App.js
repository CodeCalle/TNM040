import React, { useState } from 'react'
import './App.css'
import CountryInfo from './components/CountryInfo'
import countries from 'world-countries'
import TextInput from './components/Input'
import MatchSearch from './components/MatchSearch'
// import Button from './components/Button'

function App () {
  countries.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = countries.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)
  const [searchString, setSearchString] = useState('')

  // ### --- For button --- ###
  // const [number, setNumber] = useState(0)
  // const increment = (event) => {
  //   setNumber(number + 1)
  // }
  // const decrement = (event) => {
  //   setNumber(number - 1)
  // }

  const filteredWords = countries.filter((country) => MatchSearch(country.name.common, searchString)).slice(0, 5)
  console.log(filteredWords)

  return (
    <div className='App'>
      <div className='country'>
        {/* ### --- For button --- ### */}
        {/* <Button onClick={increment}>+ 1</Button>
        <Button onClick={decrement}>-1</Button>
        <h1>Current number is: {number}</h1> */}

        <h1>Search for a country</h1>
        <TextInput onChange={setSearchString} value={searchString} />
        <p>Text from searchbar: {searchString}</p>

        <h1>Search results</h1>
        {filteredWords.map((item, index) => {
          return (
            <CountryInfo country={item} key={item.id} detailed={index < 5} largestCountryByArea={filteredFifteen[0].area} />
          )
        })}
      </div>
    </div>
  )
}

export default App
