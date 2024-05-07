export const fetchClima = async (urlbase, ciudad, apikey) => {
    try {
        const response = await fetch(`${urlbase}?q=${ciudad}&appid=${apikey}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}