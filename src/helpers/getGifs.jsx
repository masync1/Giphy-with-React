
 export const getGiphy = async(list) =>{
    const keyapp = 'QqD4rvBq523Gcab4glbjseFsy3Z5wiJu'
    const search = encodeURI(list)
    const limitParam = 12
    const urls = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limitParam}&api_key=${keyapp}`;
    const peticion = await fetch(urls)
    const {data} = await peticion.json();
    const giphys = data.map(({id,title,
      images: {downsized_medium: {url}
  }}) => (
     { id,
      title,  
      url ,     
  }))
 
  return giphys
}