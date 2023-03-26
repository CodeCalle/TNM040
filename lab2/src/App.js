import React, { useState } from 'react'
import './App.css'
import CountryInfo from './components/CountryInfo'
import countries from 'world-countries'
import RobberApp from './components/textFieldFile'
// import Button from './components/buttonsComp'

function App () {
  countries.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = countries.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  // ### --- For button --- ###
  // const [number, setNumber] = useState(0)
  // const increment = (event) => {
  //   setNumber(number + 1)
  // }
  // const decrement = (event) => {
  //   setNumber(number - 1)
  // }

  // function testTextField (props) {
  //   const [text, setText] = useState('')

  //   function changeInput (event) {
  //     setText(event.target.value)
  //   }
  // }

  return (
    <div className='App'>
      <div className='country'>
        {/* ### --- For button --- ### */}
        {/* <Button onClick={increment}>+ 1</Button>
        <Button onClick={decrement}>-1</Button>
        <h1>Current number is: {number}</h1> */}

        {/* <input type='text' placeholder='Search for a country...' onChange={changeInput} /> */}
        <h1>Search for a country</h1>
        <RobberApp />

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
