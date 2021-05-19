const API_TOKEN = "e14b64ca70b7bfb5f2be5824acc65d1c";

export function getFilmsFromApiWithSearchedText (text, page) {

  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+ '&page= '+ page

  return fetch(url)
  	.then(response => response.json())
  	.catch(err => console.error(err))
  
}

export function getImageFromApi(name) {
	return 'https://image.tmdb.org/t/p/w300'+name
}

export function getFilmDetailFromApi(id) {
	return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
		.then(response => response.json())
		.catch(err => console.error(err))
}