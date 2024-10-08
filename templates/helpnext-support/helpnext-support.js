function addSupportBanner() {
    var backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'background-container';
    backgroundContainer.style.backgroundImage = 'url("./media_10f583de499b1b29ee1a9138d1712bfb8ad91d229.png")';

    var helpmsg = document.createElement('p');
    helpmsg.classList.add('help-msg');
    helpmsg.textContent = 'Adobe Help & Center';

    // Create the main title
    var mainTitle = document.createElement('h2');
    mainTitle.className = 'main-title';

    var bold = document.createElement('b');
    bold.textContent = "Hi, how can we help?";
    mainTitle.appendChild(bold);

    // Create the search box container
    var searchBox = document.createElement('div');
    searchBox.className = 'search-box';

    // Create the search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search Help & Support';

    // Append the search input and button to the search box container
    searchBox.appendChild(searchInput);

    // Append the title and search box to the main container
    backgroundContainer.appendChild(helpmsg);
    backgroundContainer.appendChild(mainTitle);
    backgroundContainer.appendChild(searchBox);

    return backgroundContainer;
}

function addAppsAndServices() {
    var apps = document.createElement("div");
    apps.classList.add('apps-services');

    var appsTitle = document.createElement("p");
    appsTitle.classList.add('apps-title');
    appsTitle.innerText = 'Apps & services';
    apps.appendChild(appsTitle);

    var applinks = document.createElement("div");
    applinks.classList.add("app-links");
    apps.appendChild(applinks);

    return apps;
}

function init() {
    var ele = document.querySelector("main .section");

    ele.appendChild(addSupportBanner());
    ele.appendChild(addAppsAndServices());
}

init();