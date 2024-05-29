export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dRgxeII12OOMJs0HHs4EpBoNqQGu2qqq&q=${category}&limit=10`

  const res = await fetch(url).then(res => res.json()).then(json => json.data)

  const gifs = res.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs

}

