const baseUrl = 'https://api.themoviedb.org/3'
const imageUrl = 'https://image.tmdb.org/t/p/w780'
const apiKey = '5cd249d4f26bf03481d34df30898c03e'

const movieList = document.querySelector('#movie-list')

const cardTemplate = (
  imagePath,
  title,
  releaseDate,
  voteAverage
) => {
  const releaseDateFormatted = new Date(
    releaseDate
  ).toLocaleDateString()

  return `
    <div class="card">
      <div style='position:relative' >
        <img src="${imageUrl}${imagePath}" />
        <div class = "circle-image">
          <a href="https://fsouza-marcell.github.io/marcellsouza" target="_blank">
            <img class="imagem-segunda" src="./3x4.jpg" /> 
          </a>
        </div>
      </div>
      <div class="description">
        <h2 class="title">${title}</h2>
        <p class="release-date">Data: ${releaseDateFormatted}</p>
        <p class="vote-average">Pontuação: ${voteAverage}</p>
      </div>
    </div>
  `
}

// https://fsouza-marcell.github.io/marcellsouza
// https://www.google.com

const getPopularMovies = async () => {
  const response = await fetch(
    `${baseUrl}/movie/popular?api_key=${apiKey}&language=pt-BR&region=BR&page=1`
  )

  const data = await response.json()

  data.results.forEach((item) => {
    const template = cardTemplate(
      item.poster_path,
      item.title,
      item.release_date,
      item.vote_average
    )

    movieList.innerHTML += template
  })
}

getPopularMovies()
