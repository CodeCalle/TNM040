const CountryInfo = ({ country }) => {
  country.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))

  // const filteredCountry = country.filter((item) => item.name.common !== 'Antarctica')
  // const firstFifteen = filteredCountry.slice(0, 15)

  const filteredFifteen = country.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  return (
    // style={{ backgroundColor: 'blue' }}
    <div className='country'>

      {filteredFifteen.map(item => {
        return (
          <p key={item.cca3}><b>{item.name.common}</b> {item.area} km<sup>2</sup></p>
        )
      })}
    </div>
  )
}

export default CountryInfo
