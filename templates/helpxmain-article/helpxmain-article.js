init();

function init(){
    var mainsection = document.querySelector("main .section");
    var tBar = loadTitleBar();
    mainsection.prepend(tBar);
//    var banner = loadInternalBanner();
//    tBar.insertAdjacentElement('afterend', banner);

    var last_updated = loadLastModifiedBar();
    banner.insertAdjacentElement('afterend', last_updated);
}

function loadLastModifiedBar() {
    var lastUpdated = document.querySelector('meta[name="modified-time"]').getAttribute('content');
    var date = new Date(lastUpdated);

    // Define an array of month names
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Extract the desired components from the Date object
    var month = monthNames[date.getUTCMonth()];
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    // Format the date as "Mon DD, YYYY"
    var formattedDate = `${month} ${day}, ${year}`;
    console.log(formattedDate);

    var modifiedString = `Last updated on ${formattedDate}`;

    var lu_div = document.createElement("div");
    lu_div.classList.add("last-updated");
    lu_div.innerHTML = modifiedString;
    return lu_div;
}

function loadTitleBar() {
    var c_div = document.createElement("div");
    c_div.classList.add('title-bar');
    var ogTitle = document.querySelector('meta[property="og:title"]').getAttribute('content');
    var titleHeader = document.createElement("h1");
    titleHeader.innerHTML = ogTitle;
    c_div.appendChild(titleHeader);
    return c_div;
}

function loadInternalBanner() {
    var b_div = document.createElement("div");
    b_div.classList.add('internal-banner');
    var banner_div = document.createElement("div");
    banner_div.classList.add("banner");
    banner_div.innerHTML = '<span class="icon icon-info"></span>INTERNAL';
    b_div.appendChild(banner_div);
    return b_div;
}