const CountryInfo = ({ country }) => {
  console.log(country)
  return (
    // style={{ backgroundColor: 'blue' }}
    <div className='country'>
      <p><b>{country.name.common}</b> {country.area} km<sup>2</sup></p>
    </div>
  )
}

export default CountryInfo
