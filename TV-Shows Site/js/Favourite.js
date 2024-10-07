const apiKey = 'fa12b2761508bbf0bafffe89fad6da6a';
const listId = '8298308';
const apiUrl = `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`;
const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const FavouritesContainer = document.querySelector('.Favouriteswrapper');
    const Favourites = data.items || []; //GET THE (ITEMS)ARRAY INSIE THE OBJECT

    Favourites.forEach(Favourite => {
      
      const FavouriteDiv = document.createElement('div');
      FavouriteDiv.classList.add('FavouriteDiv');
      
      const FavouriteName = document.createElement('p');
      FavouriteName.classList.add('FavouriteName');
      FavouriteName.textContent = Favourite.original_title;

      const OverlayDiv = document.createElement('div');
      OverlayDiv.classList.add('overlay');

      const FavouriteImg = document.createElement('img');
      FavouriteImg.classList.add('FavouriteImage');
      if (Favourite.backdrop_path) {
        FavouriteImg.src = `${imageUrlBase}${Favourite.backdrop_path}`;
      } else {
        FavouriteImg.src = 'images/404.jpg'; 
      }

      const FavouriteRating = document.createElement('p');
      FavouriteRating.classList.add('FavouriteRating');
      FavouriteRating.textContent = Favourite.vote_average;
      
      FavouriteDiv.appendChild(FavouriteName);

      FavouriteDiv.appendChild(OverlayDiv);
      
      FavouriteDiv.appendChild(FavouriteImg);

      FavouriteDiv.appendChild(FavouriteRating);

      FavouritesContainer.appendChild(FavouriteDiv);
      
    });
  })
  .catch(error => {
    console.error('Could Not Fetch Favourites List', error);
  });
