const CountryInfo = ({ country }) => {
  country.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = country.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  return (
    <div className='country'>
      {filteredFifteen.map(item => {
        return (
          <div key={item.cca3}>
            <p><b>{item.name.common}</b> {item.area} km<sup>2</sup></p>
            <hr style={{ backgroundColor: '#205da2', height: '12px' }} />
          </div>
        )
      })}
    </div>
  )
}

export default CountryInfo
