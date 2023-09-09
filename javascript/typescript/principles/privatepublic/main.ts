class DATA {
  compa:string ;
  private jin: number;
  readonly perro: number;
  private jimmyAA(){
    return 'hello world'
  }
}

let classJimy = new DATA()

console.log(classJimy.jimmyAA()) // error because this key is private
classJimy.perro = "" // erro only read jeje
/* 
  public
  private 
  procted
  readonly
*/