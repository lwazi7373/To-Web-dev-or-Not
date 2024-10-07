const apiKey = 'fa12b2761508bbf0bafffe89fad6da6a';
const listId = '8302586';
const apiUrl = `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`;
const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
        const TVShowsContainer = document.querySelector('.TVshowswrapper');
        const TVShows = data.items || []; //GET THE (ITEMS)ARRAY INSIE THE OBJECT

        TVShows.forEach(TVShow => {
          
            const TVShowDiv = document.createElement('div');
            TVShowDiv.classList.add('TVShowDiv');

            const TVShowName = document.createElement('p');
            TVShowName.classList.add('TVShowName');
            TVShowName.textContent = TVShow.original_name;

            const OverlayDiv = document.createElement('div');
            OverlayDiv.classList.add('overlay');

            const TVShowImg = document.createElement('img');
            TVShowImg.classList.add('TVShowImage');
            if (TVShow.backdrop_path) {
            TVShowImg.src = `${imageUrlBase}${TVShow.backdrop_path}`;
            } else {
            TVShowImg.src = 'images/404.jpg'; 
            }

            const TVShowRating = document.createElement('p');
            TVShowRating.classList.add('TVShowRating');
            TVShowRating.textContent = TVShow.vote_average;

            TVShowDiv.appendChild(TVShowName);

            TVShowDiv.appendChild(OverlayDiv);
      
            TVShowDiv.appendChild(TVShowImg);

            TVShowDiv.appendChild(TVShowRating);

            TVShowsContainer.appendChild(TVShowDiv);
        });
  })
  .catch(error => {
    console.error('Could Not Fetch TVShows List', error);
  });
