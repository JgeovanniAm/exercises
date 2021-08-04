const about = (function(){
  const title = GetQuery('.title_about');
  const columnContent = GetQuery('.column_title');
  const columnImage = GetQuery('.column_img');
  
  function setClassColumn() {
    columnContent.className = 'column_title';
    title.className = 'title_about';
    columnImage.className = 'column_img';
  }
  
  function ComparationElements() {
    setInterval(() => {
      const html = GetQuery('html');
      let topHtml = html.scrollTop;
      if (topHtml >= GetTopQuery('.about_me', 300)) {
        GetQueryAll('.tabs_list > li > a')[0].style.color = '#014a74';
        columnImage.className = 'classScrollimg';
        title.className = 'titleScroll';
        columnContent.className = 'columnTitleScroll';
        if (topHtml >= 1400) {
          setClassColumn();
          GetQueryAll('.tabs_list > li > a')[0].style.color = 'white';
        }
      } else {
        setClassColumn();
        GetQueryAll('.tabs_list > li > a')[0].style.color = 'white';
      }
    }, 0)
  }
  document.addEventListener('scroll', ComparationElements);
}())



