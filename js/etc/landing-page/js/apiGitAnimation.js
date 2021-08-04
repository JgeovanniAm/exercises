const apiGit = (function() {
  setInterval(() => {
    const title = GetQuery('.title_github');
    const titleMyActivity = GetQuery('.description_github');
    const ListActivity = GetQuery('.list');
    const html = GetQuery('html');
    let arrayElements = [titleMyActivity, ListActivity, title]
    let topHtml = html.scrollTop;
    //console.log(GetTopQuery('.content_github', 300))
    arrayElements.forEach(element => {
      if (topHtml >= GetTopQuery('.content_github', 400)) {
        element.style.opacity = 1;
        element.style.position = 'relative';
        element.style.left = '0%';
        arrayElements[0].style.opacity = 0.5;
        GetQueryAll('.tabs_list > li > a')[2].style.color = '#014a74';
        if (topHtml > GetTopQuery('.content_github', 0) + 600) {
          element.style.opacity = 0;
          element.style.left = '-30%';
          element.style.transition = '1s  ease-in-out';
          arrayElements[1].style.left = '30%';
          arrayElements[0].style.left = '0%';
          GetQueryAll('.tabs_list > li > a')[2].style.color = 'white';
        }
      } else {
        element.style.opacity = 0;
        element.style.left = '-30%';
        element.style.transition = '1s  ease-in-out';
        arrayElements[1].style.left = '30%';
        arrayElements[0].style.left = '0%';
        GetQueryAll('.tabs_list > li > a')[2].style.color = 'white';
      }
    }, 0)
  });
}())


