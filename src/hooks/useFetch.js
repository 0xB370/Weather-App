import { useState } from "react"
import { fetchClima } from "../helpers/fetchClima"

const useFetch = () => {

    const urlbase = import.meta.env.VITE_URL_BASE
    const apikey = import.meta.env.VITE_API_KEY

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (ciudad.length > 0) {
            const data = await fetchClima(urlbase, ciudad, apikey)
            setDataClima(data)
        }
    }

    return {
        ciudad,
        dataClima,
        handleCambioCiudad,
        handleSubmit
    }
}

export default useFetch