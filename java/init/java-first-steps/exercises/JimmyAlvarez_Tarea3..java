
public class App {
  public static void main(String[] args) throws Exception {
    // Entradas 
    int totalEstudiantes = Utils.leerEntero("Numero de estudiantes encuestados ");

    // Salidas 
    int totalNivelUno = 0;
    int totalNivelDos = 0;
    int totalNivelTres = 0;
    int totalNivelCuatro = 0;
    int totalNivelCinco = 0;
    int totalBaloncesto = 0;
    int totalNatacion = 0;
    int totalAjedrez = 0;
    int ningunEquipo = 0;
    double porcentajeBecados = 0;
    double porcentajeNoBecados = 0;
    double montoMensualBecaDeportiva = 0;
    double montoMensualBecaAcademica = 0;
    double montoAnualBecaDeportiva = 0;
    double montoAnualBecaAcademica = 0;

    // Entradas intermedias
    int totalBecado = 0;
    int totalNoBecado = 0;
    int totalBecaDeportiva = 0;
    int totalBecaAcademica = 0;

    for (int i = 1; i <= totalEstudiantes; i++) {

        // Entradas
        int nivel;
        String equipo;
        boolean becado;
        String tipoDeBeca;
    
        do {
          nivel = Utils.leerEntero("Introduzca del 1 al 5 el nivel del estudiante " + "#" + i + "? ");
        }
        while (
          nivel != 1 && nivel != 2 && 
          nivel != 3 && nivel != 4 && 
          nivel != 5
        );
        
        switch (nivel) {
          case 1:
            totalNivelUno = totalNivelUno + 1;
            break;
          case 2:
            totalNivelDos = totalNivelDos + 1;
            break;
          case 3:
            totalNivelTres = totalNivelTres + 1;
            break;
          case 4:
            totalNivelCuatro = totalNivelCuatro + 1;
            break;
          case 5:
            totalNivelCinco = totalNivelCinco + 1;
            break;
          default:
            break;
        }
        
        do {
            equipo = Utils.leerString("Digite el equipo que quiere pertenecer el estudiante #" + i + "?" + "\n" + "Digite A: pertenecer al equipo de baloncesto " +  "\n" + "Digite B: pertenecer al equipo de natacion" +  "\n" + "Digite C: pertenecer al equipo de ajedrez" +  "\n" + "Digite D: pertenecer a ningun equipo ");
        }
        while (!equipo.equalsIgnoreCase("A") && !equipo.equalsIgnoreCase("B") && !equipo.equalsIgnoreCase("C") && !equipo.equalsIgnoreCase("D"));
        
        if (equipo.equalsIgnoreCase("A")) {
            totalBaloncesto = totalBaloncesto + 1;
        } 
        if (equipo.equalsIgnoreCase("B")) {
            totalNatacion = totalNatacion + 1;
        } 
        if (equipo.equalsIgnoreCase("C")) {
            totalAjedrez = totalAjedrez + 1;
        } 
        if (equipo.equalsIgnoreCase("D")) {
            ningunEquipo = ningunEquipo + 1;
        }

        becado = Utils.leerBoolean("El estudiante #" + i + " es becado");
        if (becado) {
            totalBecado = totalBecado + 1;

            do {
              tipoDeBeca = Utils.leerString("Que tipo de beca cuenta el estudiante #" + i + "?" +  "\n" + "Digite A: academica " +  "\n" + "Digite B: deportiva ");
            }
            while (!tipoDeBeca.equalsIgnoreCase("A") && !tipoDeBeca.equalsIgnoreCase("B"));

            if (tipoDeBeca.equalsIgnoreCase("A")) {
                totalBecaAcademica = totalBecaAcademica + 1;
            } 
            if (tipoDeBeca.equalsIgnoreCase("B")) {
                totalBecaDeportiva = totalBecaDeportiva + 1;
            }
        } else {
            totalNoBecado = totalNoBecado + 1;
        }
    }
    montoMensualBecaDeportiva = totalBecaDeportiva * 80000;
    montoMensualBecaAcademica = totalBecaAcademica * 50000;
    montoAnualBecaDeportiva = montoMensualBecaDeportiva * 11;
    montoAnualBecaAcademica = montoMensualBecaAcademica * 11;
    porcentajeBecados = (double) totalBecado / totalEstudiantes * 100;
    porcentajeNoBecados = (double) totalNoBecado / totalEstudiantes * 100;

    // Salidas
    System.out.println(
      "Total nivel 1: " + totalNivelUno +  "\n" + 
      "Total nivel 2: " + totalNivelDos +  "\n" + 
      "Total nivel 3: " + totalNivelTres +  "\n" + 
      "Total nivel 4: " + totalNivelCuatro +  "\n" + 
      "Total nivel 5: " + totalNivelCinco +  "\n" + 
      "Porcentaje de estudiantes becados: " + porcentajeBecados + "%" +  "\n" + 
      "Porcentaje de estudiantes no becados: " + porcentajeNoBecados + "%" +  "\n" + 
      "Becas Deportiva: " + totalBecaDeportiva +  "\n" + 
      "Becas Academica: " + totalBecaAcademica +  "\n" + 
      "Monto mensual de becas Deportiva: " + "$" + montoMensualBecaDeportiva +  "\n" + 
      "Monto mensual de becas Academica: " + "$" + montoMensualBecaAcademica +  "\n" + 
      "Monto anual de becas Deportiva: " + "$" + montoAnualBecaDeportiva +  "\n" + 
      "Monto anual de becas Academica: " + "$" + montoAnualBecaAcademica +  "\n" + 
      "Total estudiantes de equipo Baloncesto: " + totalBaloncesto +  "\n" + 
      "Total estudiantes de equipo Natacion: " + totalNatacion +  "\n" + 
      "Total estudiantes de equipo Ajedrez: " + totalAjedrez +  "\n" + 
      "Total estudiantes sin equipo: " + ningunEquipo +  "\n"
      );
  }
}

