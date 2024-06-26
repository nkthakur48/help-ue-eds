init();

function init(){
    var mainsection = document.querySelector("main .section");
    var c_div = document.createElement("div");
    c_div.classList.add('content');
    var ogTitle = document.querySelector('meta[property="og:title"]').getAttribute('content');
    var titleHeader = document.createElement("h1");
    titleHeader.innerHTML = ogTitle;
    c_div.appendChild(titleHeader);
    mainsection.prepend(c_div);
}