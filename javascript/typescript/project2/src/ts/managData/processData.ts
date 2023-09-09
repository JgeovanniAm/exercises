export default class Process {
  private value: any
  private array: IdataPost[]
  private wrapper: HTMLDivElement

  constructor(wrapper: HTMLDivElement) {
    this.array = []
    this.wrapper = wrapper;
  }

  get dataGetDate() {
    return this.value;
  }

  get arrayEnd() {
    console.log(this.array);
    return this.array
  }

  set arrayEnd(value:any){
    console.log(value);
    this.array = this.array.filter((item)=> item.descript === value.descript);
  }

  set dataGetDate(object: IdataPost) {
    this.value = object;
  }

  public subscribe(result: any, callback: () => void, err: () => void) {
    result ? callback() : err();
  }

  public methodArray() {
    this.array = [...this.array, this.dataGetDate];
    this.array ? this.render() : null
  }

  render() {
    const wrapper = document.createElement('div');
    this.wrapper.innerHTML = '';
    this.arrayEnd.forEach((item:any, index:any) => {
      wrapper.className = 'user-post';
      const infoUser = document.createElement('div');
      infoUser.className = 'user_post';
      const descript = document.createElement('h3');
      descript.className = 'descript_post';
      descript.innerHTML = item.descript;
      const imgPost = document.createElement('img');
      imgPost.src = `${item.file}`;
      // controls and info
      const imgUser = document.createElement('img');
      imgUser.src = './ímg/user.png';
      const nameUser = document.createElement('h2');
      nameUser.className = 'user_post-name';
      nameUser.innerHTML = item.user
      const dateInfo = document.createElement('div');
      dateInfo.className = 'date-info';
      const controls = document.createElement('div');
      controls.className = 'user-controls';
      const typePost = document.createElement('span');
      typePost.innerHTML = item.typePost;
      const date = document.createElement('span');
      date.className = 'user_post-date';
      date.innerHTML = item.date;
      const btn = document.createElement('button');
      btn.innerHTML = 'x';
      btn.className = 'btn-delete';
      btn.id = JSON.stringify(item);
      controls.appendChild(btn);
      dateInfo.appendChild(typePost);
      dateInfo.appendChild(date);
      infoUser.appendChild(imgUser);
      infoUser.appendChild(nameUser);
      infoUser.appendChild(dateInfo);
      infoUser.appendChild(controls);
      wrapper.appendChild(infoUser);
      wrapper.appendChild(descript);
      wrapper.appendChild(imgPost);
    });
    this.wrapper.appendChild(wrapper);
  }
}

interface IdataPost {
  typePost: string
  user: string
  file: object
  descript: string
  time: string
  date: string
}
