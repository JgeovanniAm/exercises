

public class App {
    public static void main(String[] args) throws Exception {
        
        double salarioMensual = Utils.leerDoble("Digite el salario mensual del trabajador: ");
        double salarioPendiente =  1 * salarioMensual;
        double preAviso = salarioMensual;
        
        // -------------------------

        double vacacionesNoGozadas =  ( salarioMensual / 30 ) * 14;
        double aguinaldo =  ( 1 * salarioMensual ) / 12;
        double cesantia = ( ( salarioMensual / 30 ) * 20 ) * 2;

        double Liquidacion =  salarioPendiente + vacacionesNoGozadas + aguinaldo + preAviso + cesantia;

        System.out.println(Liquidacion);
    }
}
