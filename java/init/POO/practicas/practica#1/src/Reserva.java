import java.time.LocalDate;

public class Reserva {
    private int numero;
    private Miembro miembro;
    private boolean estado;
    private LocalDate fechaRealizacion;
    private Inventario inventario;
    public Reserva() {}
    public Reserva(int numero, Miembro miembro, boolean estado, LocalDate fechaRealizacion, Inventario inventario) {
        this.numero = numero;
        this.miembro = miembro;
        this.estado = estado;
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

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
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
        return "Reserva{" +
                "numero=" + numero +
                ", miembro=" + miembro +
                ", estado=" + estado +
                ", fechaRealizacion=" + fechaRealizacion +
                ", inventario=" + inventario +
                '}';
    }
}
