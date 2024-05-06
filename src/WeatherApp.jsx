import { useState } from "react"

const WeatherApp = () => {

  const urlbase = import.meta.env.VITE_URL_BASE
  const apikey = import.meta.env.VITE_API_KEY

  const [ciudad, setCiudad] = useState('')
  const [dataClima, setDataClima] = useState(null)

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }

  const fetchClima = async() => {
    try {
      const response = await fetch(`${urlbase}?q=${ciudad}&appid=${apikey}`)
      const data = await response.json()
      setDataClima(data)
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (ciudad.length > 0) fetchClima()
  }

  return (
    <div className="container">
      <h1>Aplicación del Clima</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default WeatherApp