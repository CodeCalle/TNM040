const CountryInfo = ({ country }) => {
  country.sort((a, b) => parseFloat(b.area) - parseFloat(a.area))
  const filteredFifteen = country.filter((item) => item.name.common !== 'Antarctica').slice(0, 15)

  const bigSize = filteredFifteen[0].area

  // const ratio = (item.area * 100) + %

  return (
    <div className='country'>
      {filteredFifteen.map(item => {
        return (
          <div key={item.cca3}>
            <p><b>{item.name.common}</b> {item.area} km<sup>2</sup></p>
            {/* <hr style={{ backgroundColor: '#205da2', height: '10px', width: ((item.area * 100) / bigSize + '%') }} /> */}
            <div style={{ backgroundColor: '#205da2', height: '10px', width: ((item.area * 100) / bigSize + '%') }} />
          </div>
        )
      })}
    </div>
  )
}

export default CountryInfo
