//a.- Crear dos funciones con declaraciones de tipos distintas
function display(valor: number): number {
  console.log(valor);
  return valor;
}

function displayString(valor: string): string {
  console.log(valor);
  return valor;
}

//El problema de esta alternativa es obvio, pues hemos repetido prácticamente el mismo código dos veces. Incluso aunque en una clase se aplicase sobrecarga, el código sería prácticamente el mismo.

//b.- Usar una única función en la que recibimos y devolvemos el tipo any
function display(valor: any): any {
  console.log(valor);
  return valor;
}

// generics
function display<elTipo>(valor: elTipo): elTipo {
  console.log(valor);
  return valor;
}

let texto = "hola soy jimmy";
let dato = display(texto);


//Class

//El conjunto de recursos disponibles con genéricos aumenta cuando los usamos con clases. Así podemos tener una clase en la que declaremos el uso de un tipo genérico.

class Generica<T> {
  hazAlgo(x: T, y: T): T {
    return x;
  }
}
//Como puedes ver, ese genérico lo puedes usar a lo largo del código de la clase, por ejemplo, el método hazAlgo() recibe dos genéricos y luego devuelve otro genérico.

//En el momento de instanciar un objeto de esta clase, podemos indicar el tipo concreto de datos que se aplicará a ese genérico.

let instancia = new Generica<number>();