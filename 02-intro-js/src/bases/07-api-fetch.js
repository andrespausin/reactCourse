const api_key = 'hObBOzABebTBPtCUeLyJnuutp7TpU2ya'

const httpRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

httpRequest
  .then(response => response.json())
  .then(({data}) => {
    const { url } = data.images.original;
  }) 
  .catch((error) => {
    console.error('Error fetching data:', error);
  })