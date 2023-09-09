chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.getSelected(null, function (tab) {
    getPaths(tab.url);
  });
});

function getPaths(url) {
  if (url.includes('/content/')) {
    const path = url.slice(url.indexOf('/content/')).split(/\b.html\b|\bwcmmode=disabled\b/).join('').split('?').join('');
    pushLocalStorage(path);
    createNotification();
  } else alert('Can not get the path for this page');
}

function pushLocalStorage(path) {
  chrome.storage.local.get("mypaths", function (object) {
    if (object.mypaths) {
      let currentArray = JSON.parse(object.mypaths);
      currentArray.push(path);
      chrome.storage.local.set({ mypaths: JSON.stringify(currentArray) });
    }
    else {
      let newArray = [];
      newArray.push(path)
      chrome.storage.local.set({ mypaths: JSON.stringify(newArray) });
    }
  });
}

function createNotification() {
  const notificationOption = {
    type: 'basic',
    iconUrl: 'icon48.png',
    title: 'AEM EXTENSION',
    message: 'paths saved'
  }
  chrome.notifications.create(null, notificationOption);
}