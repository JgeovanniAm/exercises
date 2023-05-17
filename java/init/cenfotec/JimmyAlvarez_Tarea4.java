
public class App {
  public static void main(String[] args) throws Exception {
    String opcion;
    do {
      opcion = menu().toLowerCase();
      if (opcion.equals("a")) {
        System.out.println("---------------------------------------------------");
        System.out.println(
            "Opcion A elegida:\nA continuacion se le requiere que llene la información del consumo que corresponde a los últimos 6 meses\n");
        System.out.println("---------------------------------------------------");
        System.out.println("El mes con mayor consumo es?: " + mesMayorConsumo());
        System.out.println("---------------------------------------------------");
      }
      if (opcion.equals("b")) {
        System.out.println("---------------------------------------------------");
        System.out.println("Opcion B elegida:\nA continuacion se le requiere que llene la información del mes\n\n");
        String mes = Utils.leerString("Digite el mes: ");
        double kwhPunta = Utils.leerDoble("Digite los KWH horario punta: ");
        double kwhValle = Utils.leerDoble("Digite los KWH horario valle: ");
        double kwhNoct = Utils.leerDoble("Digite los KWH horario nocturno: ");
        System.out.println(imprimirEcoFactura(mes, kwhPunta, kwhValle, kwhNoct));
        System.out.println("---------------------------------------------------");
      }

    } while (!opcion.equals("q"));
  }

  static String menu() {
    return Utils.leerString(
        "Digite el la opcion que desea verificar:\nA. Calcular el mes con más consumo \nB. Calcular la eco-factura del mes\nQ. Salir\n:");
  }

  static String mesMayorConsumo() {
    String mesMayor = "";
    double kwhMayor = 0;
    for (int i = 0; i < 6; i++) {
      String meses = Utils.leerString("Digite el mes: ");
      double kwh = Utils.leerDoble("Digite el total de KWH: ");
      if (kwh > kwhMayor) {
        kwhMayor = kwh;
        mesMayor = meses;
      }
    }
    return mesMayor;
  }

  static String imprimirEcoFactura(String mes, double kwhPunta, double kwhValle, double kwhNoct) {
    double totalKwh = kwhPunta + kwhValle + kwhNoct;
    double total = montoEnergia(kwhPunta, kwhValle, kwhNoct) + montoIVA(totalKwh, montoEnergia(kwhPunta, kwhValle, kwhNoct)) + montoAlumbradoPublico(totalKwh) +  montoTributoBomberos(totalKwh);
    return "\nMes facturado: " + mes + "\n Total de KWH consumidos: " + totalKwh + "\nMonto correspondiente a Energía: " + montoEnergia(kwhPunta, kwhValle, kwhNoct) + "\nMonto correspondiente a alumbrado público: " + montoAlumbradoPublico(totalKwh) + "\nMonto correspondiente al tributo a bomberos: " + montoTributoBomberos(totalKwh) + "\nMonto correspondiente al IVA: " + montoIVA(totalKwh, montoEnergia(kwhPunta, kwhValle, kwhNoct)) + "\nMonto total: " + total ;
  }

  static double montoEnergia(double kwhPunta, double kwhValle, double kwhNoct) {
    double punta = 0;
    double valle = 0;
    double noct = 0;
    if (kwhPunta <= 500) {
      punta = kwhPunta * 167.72;
    } else {
      punta = kwhPunta * 207.39;
    }
    if (kwhValle <= 500) {
      valle = kwhValle * 68.75;
    } else {
      valle = kwhValle * 83.71;
    }
    if (kwhNoct <= 500) {
      noct = kwhNoct * 28.77;
    } else {
      noct = kwhNoct * 38.74;
    }
    return punta + valle + noct;
  }

  static double montoAlumbradoPublico(double totalKwh) {
    return totalKwh * 3.37;
  }

  static double montoTributoBomberos(double totalKwh) {
    return (totalKwh * 0.0175);
  }

  static double montoIVA(double totalKwh, double montoEnergia) {
    double iva = 0;
    if (totalKwh >= 280) {
      iva = montoEnergia * 0.13;
    }
    return iva;
  }
}
