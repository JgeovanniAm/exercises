const mediaQ = window.matchMedia('(max-width:670px)');
const wrapperHeader = document.querySelector('.site-header');
const menú = document.querySelector('.site-header__content');
const btn = document.createElement('button');
const lang = document.querySelector('.site-header__language-switcher');
const search = document.querySelector('.site-header__search');
const listLi = document.querySelector('.main-nav__list');
btn.style.display = "none";

function changeViewNav(mediaquery) {
    if (mediaquery.matches) {
        btn.style.display = "block";
        btn.innerHTML = "+ menú";
        wrapperHeader.insertBefore(btn , wrapperHeader[0]);
        wrapperHeader.className = "setHeaderMobile";
        btn.className = "btn";
        lang.className = "lang";
        search.className = "search";
        listLi.className = "listLi";
        menú.className = "set";
    }
    else {
        btn.style.display = "none";
        wrapperHeader.className = "site-header";
        lang.className = "site-header__language-switcher";
        search.className = "site-header__search";
        listLi.className = "main-nav__list";
        menú.className = "site-header__content";
    }
}

changeViewNav(mediaQ);
mediaQ.addListener(changeViewNav);

let toggle = true;
btn.addEventListener('click',()=>{
    if(toggle === true) {
        menú.style.opacity=1;
        toggle = false;
    } else if(toggle === false){
        menú.style.opacity=0;
        toggle = true;
    }
})