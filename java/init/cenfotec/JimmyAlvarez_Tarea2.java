
public class App {
 public static void main(String[] args) throws Exception {
  // Entradas
  boolean identifacionAlDia = Utils.leerBoolean("Documento de indentificacion al dia");
  boolean identifacionBuenEstado = Utils.leerBoolean("Documento de indentificacion en buen estado");
  boolean dictamenMedicoAlDia = Utils.leerBoolean("Dictamen medico al dia");
  boolean multasPendientes = Utils.leerBoolean("Cuenta con multas pendintes");
  int puntosPorInfraccion = Utils.leerEntero("Puntos acomulados por infracciones de tránsito? ");
  // Entradas intermedias
  int monto = 0;
  int vigencia = 0;
  // Salidas
  String montoYVigenciaARenovar;

  if (identifacionAlDia && identifacionBuenEstado && dictamenMedicoAlDia && !multasPendientes && puntosPorInfraccion < 12) {
   if (puntosPorInfraccion <= 4) {
    monto = 5000;
    vigencia = 6;
   } else if (puntosPorInfraccion >= 5 && puntosPorInfraccion <= 8) {
    monto = 10000;
    vigencia = 4;
   } else if (puntosPorInfraccion >= 9 && puntosPorInfraccion <= 11) {
    monto = 10000;
    vigencia = 3;
   }

   boolean tramitePorBancoCR = Utils.leerBoolean("Desea hacer el tramite por el banco de Costa Rica");

   if (tramitePorBancoCR) {
    monto += 4200;
   }

   montoYVigenciaARenovar = "Requitos procesados, su monto a cancelar por la renovacion es de: " + "$" + monto + " por " + vigencia + " años de vigencia";

   System.out.println(montoYVigenciaARenovar);
  } else {
   System.out.println("Lastimosamente se le informa que la licencia se encuentra suspendida y no podra' hacer dicha renovación.");
  }
 }
}
