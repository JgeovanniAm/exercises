package bl;

import java.time.LocalDate;

public class Reserva {
    private int numero;
    private Miembro miembro;
    private LocalDate fechaRealizacion;
    private Inventario inventario;
    public Reserva() {}
    public Reserva(int numero, Miembro miembro, LocalDate fechaRealizacion, Inventario inventario) {
        this.numero = numero;
        this.miembro = miembro;
        this.fechaRealizacion = fechaRealizacion;
        this.inventario = inventario;
    }
    public int getNumero() {
        return numero;
    }
    public void setNumero(int numero) {
        this.numero = numero;
    }
    public Miembro getMiembro() {
        return miembro;
    }

    public void setMiembro(Miembro miembro) {
        this.miembro = miembro;
    }

    public LocalDate getFechaRealizacion() {
        return fechaRealizacion;
    }

    public void setFechaRealizacion(LocalDate fechaRealizacion) {
        this.fechaRealizacion = fechaRealizacion;
    }

    public Inventario getInventario() {
        return inventario;
    }

    public void setInventario(Inventario inventario) {
        this.inventario = inventario;
    }

    @Override
    public String toString() {
        return "bl.Reserva{" +
                "numero=" + numero +
                ", miembro=" + miembro +
                ", fechaRealizacion=" + fechaRealizacion +
                ", inventario=" + inventario +
                '}';
    }


}
