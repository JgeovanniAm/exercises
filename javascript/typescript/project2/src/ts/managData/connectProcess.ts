export default function connectObject({ Proccess_Data, valuePostInput, image, innerHtmlDescrip }: Itrasnport) {
  const date = new Date();
  Proccess_Data.dataGetDate = {   // getters setters
    user: 'juan',
    typePost: valuePostInput,
    file: image,
    descript: innerHtmlDescrip,
    date: `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`,
    time: `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()} `
  };

  Proccess_Data.subscribe(Proccess_Data.dataGetDate, () => { // noticacion
    Proccess_Data.methodArray(); //console.log(Proccess_Data);
    const btnDelete = document.querySelectorAll('.btn-delete') as NodeList;
    const arr = Array.prototype.slice.call(btnDelete);
    if (btnDelete) {
      arr.forEach((element: any) => {
        element.addEventListener('click', removeItem)
      });
    }
    function removeItem(e: any) {
      const object_Parse = JSON.parse(e.target.id);
      Proccess_Data.arrayEnd = object_Parse;
      Proccess_Data.render();
      console.log(Proccess_Data)
    }
  }, () => console.log('error'));
}

interface Itrasnport {
  Proccess_Data: any
  valuePostInput: string
  image: any
  innerHtmlDescrip: string
}