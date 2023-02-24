export const getGif = async (category) => {
    const url = ` https://api.giphy.com/v1/gifs/search?api_key=V1fDCVB3jDAsscobRJuCubrxLGW05JlK&q=${category}&limit=6`
    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data)
    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    )
    return gifs
    // console.log(gifs)
}