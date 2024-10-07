const apiKey = 'fa12b2761508bbf0bafffe89fad6da6a';
const listId = '8302587';
const apiUrl = `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`;
const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const moviesContainer = document.querySelector('.movieswrapper');
    const Movies = data.items || []; //GET THE (ITEMS)ARRAY INSIE THE OBJECT
    
    Movies.forEach(movie => { //Alternate through each of the movies in the movies array

      const movieDiv = document.createElement('div');
      movieDiv.classList.add('MovieDiv');
      
      const movieName = document.createElement('p');
      movieName.classList.add('MovieName');
      movieName.textContent = movie.original_title;

      const OverlayDiv = document.createElement('div');
      OverlayDiv.classList.add('overlay');

      const movieImg = document.createElement('img');
      movieImg.classList.add('MovieImage');
      if (movie.backdrop_path) {
        movieImg.src = `${imageUrlBase}${movie.backdrop_path}`;
      } else {
        movieImg.src = 'images/404.jpg'; 
      }

      const movieRating = document.createElement('p');
      movieRating.classList.add('MovieRating');
      movieRating.textContent = movie.vote_average;

      movieDiv.appendChild(movieName);

      movieDiv.appendChild(OverlayDiv);
      
      movieDiv.appendChild(movieImg);

      movieDiv.appendChild(movieRating);

      moviesContainer.appendChild(movieDiv);

    });
 
  })
  .catch(error => {
    console.error('Could Not Fetch Movies List', error);
  });