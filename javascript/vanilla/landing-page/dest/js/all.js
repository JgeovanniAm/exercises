const canvas = GetQuery('.wraper_canvas');
let canvasContext = canvas.getContext('2d');
function setSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.addEventListener('resize', setSize)
setSize();
class object {
	constructor(x, y, r, v) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.v = v;
	}
	draw() {
		canvasContext.beginPath()
		canvasContext.arc(this.x, this.y, 20, 0, Math.PI * this.r, false);
		canvasContext.fillStyle = "#014a74";
		canvasContext.fill();
		canvasContext.closePath();
	}
	move() {
		this.y += this.v;
		if (this.y + this.r >= window.innerHeight) {
			this.y = 0;
			this.y += this.v
		}
		this.draw()
	}
}

function create(item) {
	let array = [];
	for (let i = 0; i <= 70; i++) {
		let x = Math.random() * window.innerWidth;
		let y = Math.random() * 300;
		let velocity = Math.random() * 5;
		let character = new object(x, y, (Math.random() * 0.5) + 0.01, velocity);
		array.push(character);
	}
	return item = array;
}
let newarray = create();

function IteracionDraw() {
	requestAnimationFrame(IteracionDraw)
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	newarray.forEach(element => {
		//console.log(element)
		element.move()
	});
}
IteracionDraw()


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



const apiJsonGithub = (function(){
  let requestGithub = new XMLHttpRequest()
  let eventRespondGit;
  requestGithub.addEventListener('load', function () {
    if (requestGithub.readyState == 4 && requestGithub.status == 200) {
      eventRespondGit = event.target.response;
      printElementsGit()
    }
  });
  function setClassElementsGith(object) {
    object.titleRepo.className = 'title_repo';
    object.commit.className = 'text_commit';
    object.urlRepo.className = 'url_repo';
  }
  function printElementsGit() {
    const List = GetQuery('.list');
    for (let index = 5; index < 25; index++) {
      const Elements = new itemElements;
      setClassElementsGith(Elements)
      const item = document.createElement('li');
      let ListResponse = eventRespondGit[index];
      const date = ListResponse.created_at;
      item.className = 'li_activity';
      Elements.titleRepo.innerHTML = ListResponse.full_name;
      Elements.commit.innerHTML = ListResponse.description;
      Elements.users.innerHTML = date.slice(0, 10).split('-').reverse().join('-');
      Elements.urlRepo.setAttribute('href', `${ListResponse.html_url}`);
      Elements.urlRepo.innerHTML = 'respositorio';
      for (let key in Elements) {
        item.appendChild(Elements[key]);
      }
      List.appendChild(item);
    }
  }
  class itemElements {
    constructor(titleRepo, commit, users, urlRepo) {
      titleRepo = document.createElement('h3');
      commit = document.createElement('h3');
      users = document.createElement('h3');
      urlRepo = document.createElement('a');
      this.titleRepo = titleRepo;
      this.commit = commit;
      this.users = users;
      this.urlRepo = urlRepo;
    }
  }
  requestGithub.responseType = 'json';
  requestGithub.open('GET', 'https://api.github.com/users/JgeovanniAm/repos');
  requestGithub.send();
}())



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

