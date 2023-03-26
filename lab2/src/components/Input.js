const Input = ({ onChange, value, type = 'text', style }) => {
  return (
    <input style={{ ...style }} value={value} type={type} placeholder='Search for country...' onChange={(e) => onChange(e.target.value)} />
  )
}

export default Input
