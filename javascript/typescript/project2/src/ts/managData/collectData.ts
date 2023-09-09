import ProccessData from './processData';
import connectProcess from './connectProcess';

(function () {
  const allPostWrapper = document.querySelector('.all-post-list') as HTMLDivElement;
  const title = (document.querySelector('.p') as HTMLElement);
  const myTypepublicPostBnt = document.querySelectorAll('input[name=type]') as NodeList;
  const descriptionPost = document.querySelector('#text-post') as HTMLTextAreaElement;
  const send = document.querySelector('#btn-upload') as HTMLInputElement;
  const inputFile = document.querySelector('#imgFile') as HTMLInputElement;
  const Proccess_Data = new ProccessData(allPostWrapper);  // my class instace

  const collectData = () => { // collect values input
    const file: any = inputFile.files;
    const arr = Array.prototype.slice.call(myTypepublicPostBnt);
    let collectValue;
    for (const element of arr) if (element.checked) collectValue = element.value;
    connectProcess({
      valuePostInput: collectValue,
      image: file[0].name,
      innerHtmlDescrip: descriptionPost.value,
      Proccess_Data: Proccess_Data
    });
    clearInputs() //clear input and close view
  }

  const clearInputs = () => {
    descriptionPost.value = '';
    inputFile.value = '';
    title.innerHTML = 'Quieres hacer otra publicación?'
  }

  send.addEventListener('click', collectData);
}());