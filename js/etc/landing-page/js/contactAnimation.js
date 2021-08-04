const animationContact = (function(){
  function ComparationContactItem() {
    setInterval(() => {
      const html = GetQuery('html');
      let topHtml = html.scrollTop;
      const form = GetQuery('.form_comtact')
      if (topHtml >= GetTopQuery('.title_contact', 500)) {
        form.style.opacity = 1;
        form.style.transition = '2s  ease-in-out'
        GetQueryAll('.tabs_list > li > a')[3].style.color = '#014a74';
      }
      else {
        form.style.opacity = 0;
        form.style.transition = '1s  ease-in-out'
        GetQueryAll('.tabs_list > li > a')[3].style.color = 'white';
      }
    }, 0)
  }
  document.addEventListener('scroll', ComparationContactItem)
}())

