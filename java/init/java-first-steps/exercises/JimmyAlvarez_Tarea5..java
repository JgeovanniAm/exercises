
public class App {
  public static void main(String[] args) {
    int[] barcosJugador = {};
    int[] barcosComputadora = {};
    int opcionSeleccionado;
    do {
      opcionSeleccionado = imprimirMenu();
      switch (opcionSeleccionado) {
        case 1:
          barcosJugador = inicializarBarcosJugador();
          barcosComputadora = inicializarBarcosComputadora();
          break;
        case 2:
          if (barcosJugador.length > 0 && barcosComputadora.length > 0) {
            imprimirBarcos(barcosJugador, barcosComputadora);
          } else {
            System.out.println("----------------------------------------------------");
            System.out.println("Porfavor inicialice los barcos, presione la opcion 1");
            System.out.println("----------------------------------------------------");
          }
          break;
        case 3:
          System.out.println(" Empezo' el juego querido usario jajajajajaja no te vayas aburrir porfavor :( ");
          int counterPlayer = 0;
          int counterComputadora = 0;
          if (barcosJugador.length > 0 && barcosComputadora.length > 0) {
            for (int i = 0; i < 10; i++) {
              System.out.println(counterComputadora);
              System.out.println(counterPlayer);
              if (counterComputadora < 5) {
                int disparoComputadora = (int) (Math.random() * (18 - 0)) - 0;
                int result = hacerDisparo(barcosJugador, disparoComputadora);
                if (result != -1) {
                  System.out.println("----------------------------------------------------");
                  System.out.println("La computadora hizo un disparo y derribo' un barco: " + result);
                  System.out.println("----------------------------------------------------");
                  counterComputadora += 1;
                } else {
                  System.out.println("----------------------------------------------------");
                  System.out.println("La computadora hizo un disparo y no derribo un barco");
                  System.out.println("----------------------------------------------------");
                }
              } else {
                break;
              }
              if (counterPlayer < 5) {
                System.out.println("----------------------------------------------------");
                int disparoPlayer = Utils.leerEntero("Haga un disparo amigo, la computadora hizo un disparo!!");
                System.out.println("----------------------------------------------------");
                int result = hacerDisparo(barcosComputadora, disparoPlayer);
                if (result != -1) {
                  System.out.println("----------------------------------------------------");
                  System.out.println("Hiciste un disparo y acabas de derribar un barco: " + result);
                  System.out.println("----------------------------------------------------");
                  counterPlayer += 1;
                } else {
                  System.out.println("----------------------------------------------------");
                  System.out.println("Que mala suerte tienes, no derribaste a ningun barco");
                  System.out.println("----------------------------------------------------");
                }
              } else {
                break;
              }
            }
            System.out.println(imprimirGanador(counterPlayer, counterComputadora));
          } else {
            System.out.println("----------------------------------------------------");
            System.out.println("Porfavor inicialice los barcos, presione la opcion 1");
            System.out.println("----------------------------------------------------");
          }
          break;
        default:
          break;
      }
    } while (opcionSeleccionado != 4);
  }

  private static int[] inicializarBarcosJugador() {
    int[] barcos = new int[20];
    for (int i = 1; i <= 5; i++) {
      boolean redFlag = false;
      do {
        int indice = redFlag == true ? Utils.leerEntero(
            "No se puede repetir el mismo indice \n Digite el indice que desea almacenar el barco #" + i + ": ")
            : Utils.leerEntero("Digite el indice que desea almacenar el barco #" + i + ": ");
        if (barcos[indice] == 0) {
          barcos[indice] = i;
          redFlag = false;
        } else {
          redFlag = true;
        }
      } while (redFlag);
    }
    return barcos;
  }

  private static int[] inicializarBarcosComputadora() {
    int[] barcos = new int[20];
    int iteracion = 0;
    for (int i = 0; i < 5; i++) {
      if (iteracion < 5) {
        iteracion++;
        int ramdom = (int) (Math.random() * (18 - 0)) - 0;
        if (barcos[ramdom] != 0) {
          for (int j = 0; j < barcos.length; j++) { // prodia hacer un while 29/4/23
            if (barcos[j] == 0) {
              barcos[j] = iteracion;
              break;
            }
          }
        } else {
          barcos[ramdom] = iteracion;
        }
      }
    }
    return barcos;
  }

  private static void imprimirBarcos(int[] barcosJugador, int[] barcosComputadora) {
    System.out.println("Barcos Computadora:");
    for (int iterable_element : barcosComputadora) {
      System.out.println(iterable_element);
    }
    System.out.println("Barcos Jugador:");
    for (int iterable_element : barcosJugador) {
      System.out.println(iterable_element);
    }
  }

  private static int hacerDisparo(int[] arr, int index) {
    if (arr[index] == 0) {
      return -1;
    } else {
      int numBarco = arr[index];
      arr[index] = 0;
      return numBarco;
    }
  }

  private static String imprimirGanador(int barcosDerribadosJugador, int barcosDerribadosComputadora) {
    if (barcosDerribadosJugador == barcosDerribadosComputadora) {
      return "Es un empate";
    }
    if (barcosDerribadosJugador > barcosDerribadosComputadora) {
      return "El ganador es el Jugador: A";
    } else {
      return "El ganador es el Jugador: Computadora";
    }
  }

  private static int imprimirMenu() {
    String[] opciones = { "Inicializar el Juego", "Imprimir dónde están los barcos", "Jugar", "Salir del juego." };
    return Utils.seleccionarElementoTexto("Eliga la opcion que desea ejecutar!!", opciones);
  }
}
