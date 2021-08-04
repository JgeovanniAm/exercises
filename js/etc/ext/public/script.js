(function () {
  const navTab = document.querySelector('.nav.nav-tabs'),
    listPaths = document.querySelector('.paths'),
    buttonClear = document.querySelector('.button-clear'),
    wrapperPanelsTab = document.querySelector('.tab-content'),
    iframe = document.querySelector('#iframe'),
    panelIframe = document.querySelector(`[aria-labelledby="profile-tab"]`),
    loadIframe = document.querySelector('.loading');

  navTab.addEventListener('click', handleClickTab);
  buttonClear.addEventListener('click', clearStorage);
  getStorage();

  function clearStorage() {
    chrome.storage.local.set({ mypaths: JSON.stringify([]) });
    listPaths.innerHTML = '';
  }

  function getStorage() {
    chrome.storage.local.get("mypaths", function (path) {
      const arrPaths = JSON.parse(path.mypaths);
      createListPaths(arrPaths);
    });
  }

  function handleClickTab(e) {
    const target = e.target;
    if (target.getAttribute('role') == 'tab') {
      tabActive(target);
      setIframe();
    }
  }

  function tabActive(tab) {
    resetTab(tab);
    const targetedTabPanel = wrapperPanelsTab.querySelector(`[aria-labelledby="${tab.id}"]`);
    tab.classList.add('active');
    targetedTabPanel.classList.add('active');
  }

  function resetTab() {
    const tabActive = document.querySelector('.nav-link.active');
    const tabPanelActive = wrapperPanelsTab.querySelector('.tab-pane.active');
    tabActive.classList.remove('active');
    tabPanelActive.classList.remove('active');
  }

  function setIframe() {
    if (panelIframe.classList.contains('active') && iframe.getAttribute('src') === "") {
      iframe.setAttribute('src', '/test-products/test3.html?wcmmode=disabled');
      iframe.addEventListener('load', () => loadIframe.remove());
    }
  }

  function createListPaths(arrPaths) {
    arrPaths.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = item;
      listPaths.appendChild(li);
    });
  }
}())