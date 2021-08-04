const proyects = (function(){
  function ComparationItemsTop() {
    const html = GetQuery('html');
    let topHtml = html.scrollTop;
    let titleWork = GetQuery('.title_works');
    function TabSetClass() {
      if (topHtml >= GetTopQueryAll('.item_work')[0] - 800) {
        GetQueryAll('.tabs_list > li > a')[1].style.color = '#014a74';
        titleWork.style.opacity = 1;
        titleWork.style.transition = '1.5s  ease-in-out';
      } else {
        GetQueryAll('.tabs_list > li > a')[1].style.color = 'white';
        titleWork.style.opacity = 0;
        titleWork.style.transition = '1.5s  ease-in-out';
      }
      if (topHtml >= GetTopQueryAll('.item_work')[4]) {
        GetQueryAll('.tabs_list > li > a')[1].style.color = 'white';
        titleWork.style.opacity = 0;
        titleWork.style.transition = '1.5s  ease-in-out';
      }
    }
    TabSetClass();
    for (let item = 0; item < GetTopQueryAll('.item_work').length; item++) {
      GetQueryAll('.item_work')[item].style.opacity = 0;
      GetQueryAll('.item_work')[item].style.position = 'relative';
      GetQueryAll('.item_work')[item].style.left = '-30%';
      GetQueryAll('.item_work')[item].style.transition = '0.3s  ease-in-out';
      if (topHtml >= GetTopQueryAll('.item_work')[item] - 800) {
        GetQueryAll('.item_work')[item].style.opacity = 1;
        GetQueryAll('.item_work')[item].style.position = 'relative';
        GetQueryAll('.item_work')[item].style.left = '0%';
        GetQueryAll('.item_work')[item].style.transition = '0.6s  ease-in-out';
        if (topHtml >= GetTopQueryAll('.item_work')[item]) {
          GetQueryAll('.item_work')[item].style.opacity = 0;
          GetQueryAll('.item_work')[item].style.position = 'relative';
          GetQueryAll('.item_work')[item].style.left = '-50%';
          GetQueryAll('.item_work')[item].style.transition = '0.3s  ease-in-out';
        }
      }
    }
  }
  document.addEventListener('scroll', ComparationItemsTop)
}())


