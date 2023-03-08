const CountryInfo = ({ country }) => {
  country.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))

  const firstFifteen = country.slice(0, 15)

  console.log(firstFifteen)

  // console.log(country.slice(0, 15))

  return (
    // style={{ backgroundColor: 'blue' }}
    <div className='country'>
      {/* <p><b>{country.name.common}</b> {country.area} km<sup>2</sup></p> */}
      {/* <p><b>{country[10].name.common}</b> {country[10].area} km<sup>2</sup></p> */}
      {/* <p>{country}</p> */}
      {/* sort(country.area) */}
      {/* <p><b>{country}</b></p> */}
    </div>
  )
}

export default CountryInfo
