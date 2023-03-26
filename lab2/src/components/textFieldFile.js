import React, { useState } from 'react'

// function toRobberLanguage (text) {
//   const characters = text.split('')
//   const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
//   // `characters` and `consonants` are now two arrays of characters.
//   const robberArray = characters.map(c => {
//     const lowerCaseCharacter = c.toLowerCase()
//     if (consonants.includes(lowerCaseCharacter)) {
//       return c + 'o' + c.toLowerCase()
//     } else {
//       return c
//     }
//   })
//   return robberArray.join('')
// }

function RobberApp (props) {
  const [text, setText] = useState('')

  function changeInput (event) {
    setText(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <input type='text' placeholder='Type here...' onChange={changeInput} />
      {/* <p>{toRobberLanguage(text)}</p> */}
    </div>
  )
}

export default RobberApp
