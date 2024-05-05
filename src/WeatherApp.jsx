import { useState } from "react"

const WeatherApp = () => {

  const [ciudad, setCiudad] = useState('')

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }

  return (
    <div className="container">
      <h1>Aplicación del Clima</h1>
      <form>
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