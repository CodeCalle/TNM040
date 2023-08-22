import { useParams } from "react-router-dom"
import countries from "world-countries"
import CountryInfo from "./CountryInfo"

const CountryDetails = () => {
  const { cca3 } = useParams()
  const country = countries.find(country => country.cca3.toLowerCase() === cca3.toLowerCase())

  const largestCountryByArea = countries.reduce((acc, country) => country.area > acc ? country.area : acc, 0)

  return (
    <CountryInfo country={country} detailed={true} largestCountryByArea={largestCountryByArea} />
  )
}

export default CountryDetails
