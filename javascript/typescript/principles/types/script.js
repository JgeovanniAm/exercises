// boolean
var persona = true;
var animal;
console.log(animal);
// number
var myNumer;
// vsC is going to give me or alert : Type '"perro"' is not assignable to type 'number'
function ReD() {
    myNumer = 'perro';
}
// string
var compadre = "JUAN";
var comadre = 'ana';
// any
var IamAny = 'hola';
IamAny = 123;
IamAny = [];
// arrays
var myArray = [1, 2, 3, 4, 5];
var myArray2 = ['jimmy', 'maria', 'jin'];
myArray2.push(2); // Argument of type '2' is not assignable to parameter of type 'string'.
// object 
var objectC = {
    nombre: 'jimmy',
    compa: 'carlos',
    familia: ['jin', 'mivh', 'carlota']
};
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
var myOtherobject = {
    nombre: 'jimmy',
    amigos: 2,
    familia: ['jin', 'ji'],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(myOtherobject.getNombre());
// nombre:string, amigos:number, familia:string[], getNombre:()=>string  i dont need this in my object now i only put my typePerson
var myOtherobject2 = {
    nombre: 'jimmy',
    amigos: 2,
    familia: ['jin', 'ji'],
    getNombre: function () {
        return this.nombre;
    }
};
// Clases
var Aves = /** @class */ (function () {
    function Aves() {
    }
    return Aves;
}());
var colibrí = new Aves();
