export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=t7a1Jn9MgwDD3O87BKJJxvS4LQuLKmb7&q=${category}&limit=12`

  const res = await fetch(url).then(res => res.json()).then(json => json.data)

  const gifs = res.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs

}

