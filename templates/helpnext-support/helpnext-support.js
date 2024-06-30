const backgroundContainer = document.createElement('div');
backgroundContainer.className = 'background-container';
backgroundContainer.style.backgroundImage = 'url("./media_10f583de499b1b29ee1a9138d1712bfb8ad91d229.png")';

// Create the main title
const mainTitle = document.createElement('h1');
mainTitle.className = 'main-title';
mainTitle.textContent = 'Your Main Title';

// Create the search box container
const searchBox = document.createElement('div');
searchBox.className = 'search-box';

// Create the search input
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.className = 'search-input';
searchInput.placeholder = 'Search...';

// Create the search button
const searchButton = document.createElement('button');
searchButton.className = 'search-button';
searchButton.textContent = 'Search';

// Append the search input and button to the search box container
searchBox.appendChild(searchInput);
searchBox.appendChild(searchButton);

// Append the title and search box to the main container
backgroundContainer.appendChild(mainTitle);
backgroundContainer.appendChild(searchBox);

// Append the main container to the body
var ele = document.querySelector("main .section");
ele.prepend(backgroundContainer);