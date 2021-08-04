(function(){
  document.addEventListener('scroll', function () {
    setClass()
  })
  function removeClass() {
    GetQueryAll('.tabs_list > li > a').forEach(element => {
      element.style.color = 'white';
    });
  }
  function setClass() {
    let logotab = GetQuery('#image_logo');
    logotab.addEventListener('click', function () {
      removeClass();
    })
    GetQueryAll('.tabs_list > li > a').forEach(element => {
      element.addEventListener('click', function () {
        if (element.click) {
          removeClass();
          element.style.color = '#014a74';
        }
      })
    });
  }
}())



