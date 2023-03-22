const CountryInfo = ({ country }) => {
  country.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = country.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  return (
    <div className='country'>
      {filteredFifteen.map(item => {
        return (
          <div key={item.cca3}>
            <p><b>{item.name.common}</b> {item.area} km<sup>2</sup></p>
            <div style={{ backgroundColor: '#205da2', height: '10px', width: ((item.area * 100) / item.area[0] + '%') }} />
          </div>
        )
      })}
    </div>
  )
}

export default CountryInfo
