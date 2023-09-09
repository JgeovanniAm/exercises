let btn = document.querySelector('.btNext');
let btnPrevious = document.querySelector('.btPrevious');
btn.addEventListener('click', next);
btnPrevious.addEventListener('click', previous);
let num = 0;

function next() {
    num++;
    API(`/api/v1/cars/${num}`).then(RenderData);
}
function previous() {
    if (num == 0) {
        num = 0;
        API(`/api/v1/cars/${0}`).then(RenderData)
    }else {
        num--;
        API(`/api/v1/cars/${num}`).then(RenderData)
    };
}
