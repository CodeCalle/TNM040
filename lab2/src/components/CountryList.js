import React, { useState } from 'react'
// import './App.css'
import CountryInfo from './CountryInfo'
import countries from 'world-countries'
import TextInput from './Input'
import MatchSearch from './MatchSearch'

function CountryList () {
  countries.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = countries.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)
  const [searchString, setSearchString] = useState('')

  const filteredWords = countries.filter((country) => MatchSearch(country.name.common, searchString)).slice(0, 5)
  console.log(filteredWords)

  return (
    <div className='App'>
      <div className='country'>
        <h1>Search for a country</h1>
        <TextInput onChange={setSearchString} value={searchString} />
        <p>Text from searchbar: {searchString}</p>

        <h1>Search results</h1>
        {filteredWords.map((item, index) => {
          return (
            <CountryInfo country={item} key={item.cca3} detailed={index < 5} largestCountryByArea={filteredFifteen[0].area} />
          )
        })}
      </div>
    </div>
  )
}

export default CountryList
