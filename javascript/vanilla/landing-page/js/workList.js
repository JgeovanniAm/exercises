const WorkJson = (function(){
  const request = new XMLHttpRequest()
  let eventresponse;
  request.addEventListener('load', function () {
    if (request.readyState == 4 && request.status == 200) {
      eventresponse = event.target.response.works;
      // console.log(eventresponse);
      InsertElements();
    }
  });
  function SetClassWorksli(object) {
    object.buttonLeft.className = 'arrow_left';
    object.buttonRight.className = 'arrow_right';
    object.divslider.className = 'slider_box';
    object.details.className = 'wraper_details'
    object.NameWork.className = 'name_work';
    object.tools.className = 'tols_work';
    object.code.className = 'link_code';
    object.site.className = 'link_site';
  }
  function setInnerHTMLWorksLi(object) {
    object.buttonLeft.innerHTML = '<';
    object.buttonRight.innerHTML = '>';
    object.code.innerHTML = 'github';
    object.site.innerHTML = 'github/page';
  }
  function InsertElements() {
    let ul = GetQuery('.list_work')
    let idNumLetf = -1;
    let idNuRight = -1;
    for (const item of eventresponse) {
      const li = document.createElement('li');
      li.className = 'item_work';
      const node = new Createlement;
      SetClassWorksli(node);
      setInnerHTMLWorksLi(node)
      node.buttonLeft.id = idNumLetf += 1;
      node.buttonRight.id = idNuRight += 1;
      node.divslider.style.background = ` url(${item.arrayImg[0]})`;
      node.code.setAttribute('href', `${item.CodeLink}`)
      node.site.setAttribute('href', `${item.WebSite}`)
      node.NameWork.innerHTML = item.Name;
      node.tools.innerHTML = item.Tools;
      li.appendChild(node.buttonLeft);
      li.appendChild(node.divslider);
      li.appendChild(node.buttonRight);
      li.appendChild(node.details);
      ul.appendChild(li);
      let num = 0;
      node.buttonRight.addEventListener('click', function () {
        parseInt(node.buttonRight.id);
        num++;
        if (num >= 6) {
          num = 0;
        }
        node.divslider.style.background = `url(${item.arrayImg[num]})`;
      })
      node.buttonLeft.addEventListener('click', function () {
        parseInt(node.buttonRight.id);
        if (num <= 0) {
          num = 6;
        }
        num--;
        node.divslider.style.background = `url(${item.arrayImg[num]})`;
      })
    }
  }
  class Createlement {
    constructor(divslider, details, NameWork, tools, code, site, buttonLeft, buttonRight) {
      divslider = document.createElement('div');
      details = document.createElement('div');
      NameWork = document.createElement('h3');
      tools = document.createElement('h3');
      code = document.createElement('a');
      site = document.createElement('a');
      buttonLeft = document.createElement('button');
      buttonRight = document.createElement('button');
      details.appendChild(NameWork);
      details.appendChild(tools);
      details.appendChild(code);
      details.appendChild(site);
      this.divslider = divslider;
      this.details = details;
      this.NameWork = NameWork;
      this.tools = tools;
      this.code = code;
      this.site = site;
      this.buttonLeft = buttonLeft;
      this.buttonRight = buttonRight;
    }
  }
  request.responseType = 'json';
  request.open('GET', 'dataJson/list.json');
  request.send();
}())

