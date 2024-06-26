init();

function init(){
    var mainsection = document.querySelector("main .section");
    var tBar = loadTitleBar();
    mainsection.prepend(tBar);
    var banner = loadInternalBanner();
    tBar.insertAdjacentElement('afterend', banner);
}

function loadTitleBar() {
    var c_div = document.createElement("div");
    c_div.classList.add('content');
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