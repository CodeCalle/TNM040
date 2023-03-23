const CountryInfo = ({ country, detailed, largestCountryByArea }) => {
  return (
    <div key={country.cca3}>
      <p><b>{country.name.common}</b> {country.area} km<sup>2</sup></p>
      <div style={{ backgroundColor: '#205da2', height: '10px', width: ((country.area * 100) / largestCountryByArea + '%') }} />
    </div>
  )
}

export default CountryInfo
