import { useNavigate } from "react-router-dom"

const CountryInfo = ({ country, detailed, largestCountryByArea }) => {
const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/country/${country.cca3}`)
  }

  return (
    <div className='box' key={country.cca3} onClick={handleClick}>
      <p><b>{country.name.common}</b> {Math.round(country.area / 100000) / 10} milion km<sup>2</sup></p>
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
    height: 10
  }
}

export default CountryInfo
