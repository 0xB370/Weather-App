import useFetch from "./hooks/useFetch"

const WeatherApp = () => {

  const urlImg = import.meta.env.VITE_IMG_URL
  const diffKelvin = 273.15

  const {ciudad, dataClima, handleCambioCiudad, handleSubmit} = useFetch()

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