import { useState } from "react"

const WeatherApp = () => {

  const urlbase = import.meta.env.VITE_URL_BASE
  const urlImg = import.meta.env.VITE_IMG_URL
  const apikey = import.meta.env.VITE_API_KEY
  const diffKelvin = 273.15
  
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
      {
        dataClima && (
          <div>
            <h2>{dataClima?.name}</h2>
            <p>Temperatura: {parseInt(dataClima?.main?.temp - diffKelvin)}ºC</p>
            <p>Condición meteorológica: {dataClima?.weather[0]?.description}</p>
            <img src={`${urlImg}${dataClima?.weather[0]?.icon}@2x.png`} alt="" />
          </div>
        )
      }
    </div>
  )
}

export default WeatherApp