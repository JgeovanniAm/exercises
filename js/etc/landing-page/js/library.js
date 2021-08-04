// important
function GetQueryAll(element) {
    return document.querySelectorAll(element);
}
function GetQuery(item) {
return document.querySelector(item);
}
function GetTopQuery(element, num) {
const i = document.querySelector(element);
const top = i.offsetTop - num;
return top;
}
function GetTopQueryAll(elements) {
let TopItems = [];
GetQueryAll(elements).forEach(element => {
    const top = element.offsetTop
    TopItems.push(top)
});
let num = TopItems;
return num;
}