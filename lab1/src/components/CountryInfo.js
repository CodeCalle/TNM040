const CountryInfo = ({ country, detailed, largestCountryByArea }) => {
  return (
    <div key={country.cca3}>
      <p><b>{country.name.common}</b> {country.area} km<sup>2</sup></p>
      {detailed === true && (
        <>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
        </>
      )}
      <div className='bar' style={{ ...styles.bar, width: ((country.area * 100) / largestCountryByArea + '%') }} />
    </div>
  )
}

const styles = {
  bar: {
    backgroundColor: '#205da2',
    height: '10px'
  }
}

export default CountryInfo
