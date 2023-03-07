const CountryInfo = ({country}) => {
    console.log(country.name.common)
    return (
        <p>{country.name.common}</p>
    )
}

export default CountryInfo