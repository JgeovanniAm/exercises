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


