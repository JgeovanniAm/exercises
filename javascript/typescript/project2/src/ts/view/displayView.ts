import { callbackEventDisplay } from './util';

(function () {
  const btnDisplayTypePost = (document.querySelector('.type-post') as HTMLButtonElement);
  const optionsPost = (document.querySelector('.options-public') as HTMLElement);
  const closeBtnOptions = (document.querySelector('.options-public__close-btn') as HTMLButtonElement);
  const btnDisplayFormPost = (document.querySelector('#display-form') as HTMLButtonElement);
  const viewPost = (document.querySelector('#post') as HTMLElement);
  const closePostBtn = (document.querySelector('.post-closebtn') as HTMLButtonElement);

  function displayViewItems(elements: IitemHtTML) {
    let state = false;
    
    callbackEventDisplay({  // exported function callback
      btn: elements.btn,
      html: elements.view,
      close: elements.close,
    }, (result) => {
      result.btn.addEventListener('click', () => {
        if (state) {
          result.html.className = elements.hidClass;
          state = false;
        } else if (state == false) {
          result.html.className = elements.showClass;
          state = true;
        }
      })
      result.close.addEventListener('click', () => {
        result.html.className = elements.hidClass;
        state = false;
      })
    }, () => {
      throw Error;
    })
  }

  displayViewItems({
    btn: btnDisplayFormPost,
    view: viewPost,
    close: closePostBtn,
    hidClass: 'hid-post',
    showClass: 'show-post'
  })

  displayViewItems({
    btn: btnDisplayTypePost,
    view: optionsPost,
    close: closeBtnOptions,
    hidClass: 'options-public',
    showClass: 'options-public--show'
  })
}())

interface IitemHtTML {
  btn: HTMLButtonElement
  view: HTMLElement
  close: HTMLButtonElement
  hidClass: string
  showClass: string
}

