// boolean
const persona:boolean = true;
let animal:boolean;
console.log(animal);

// number

let myNumer:number;

// vsC is going to give me or alert : Type '"perro"' is not assignable to type 'number'
function ReD () {
  myNumer = 'perro';
}

// string

const compadre:string = "JUAN";
const comadre:string = 'ana';

// any

let IamAny:any = 'hola';
  IamAny = 123;
  IamAny = [];

// arrays

const myArray:number[] = [1,2,3,4,5];
const myArray2:string[] = ['jimmy', 'maria', 'jin'];

myArray2.push(2); // Argument of type '2' is not assignable to parameter of type 'string'.

// object 

const objectC = {
  nombre: 'jimmy',
  compa: 'carlos',
  familia: ['jin','mivh','carlota'],
}

objectC.u; // Property 'u' does not exist on type; yeah!! ILOVETS

// Type 

/*  ERROR TS
  { nombre: string; amigos: string; familia: string[]; } is not assignable to type { nombre: string; amigos: number; familia: string[]; }'
  amigos should be a number

let myOtherobject: {nombre:string, amigos:number, familia:string[] } = {
  nombre: 'jimmy',
  amigos: 'klj', 
  familia: ['jin', 'ji']
}*/

let myOtherobject: {nombre:string, amigos:number, familia:string[], getNombre:()=>string } = {
  nombre: 'jimmy',
  amigos: 2, 
  familia: ['jin', 'ji'],
  getNombre: function(){
    return this.nombre;
  }
}

console.log(myOtherobject.getNombre())

// Tipos personalizados

type MYDATA = {
  nombre:string, 
  amigos:number, 
  familia:string[], 
  getNombre:()=>string,
}

// nombre:string, amigos:number, familia:string[], getNombre:()=>string  i dont need this in my object now i only put my typePerson

let myOtherobject2:MYDATA = {
  nombre: 'jimmy',
  amigos: 2, 
  familia: ['jin', 'ji'],
  getNombre: function(){
    return this.nombre;
  }
}

// Interface

interface Animal {
  nombre: string
}

interface Anoma extends Animal {
  saludo: string
}


// Clases

class Aves {
  nombre:string;
  type:string;

}

let colibrí:Aves = new Aves();

// constructor

class Aves2 {
  nombre:string;
  type:string;

  constructor(nombre:string, type:string){
    this.nombre = nombre; // este objecto hace referencia a el typo que tengo arriba;
    this.type = type;
  }
}

let colibrí:Aves = new Aves();

// tuple

let arry :[number, string];
arry = [1,'jimmy'];
