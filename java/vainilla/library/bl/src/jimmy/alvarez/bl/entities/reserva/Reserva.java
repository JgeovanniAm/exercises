package jimmy.alvarez.bl.entities.reserva;

import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.miembro.Miembro;

import java.time.LocalDate;

public class Reserva {
    private EstadoReserva estado;
    private String description = "";
    private int numero;
    private Miembro miembro;
    private LocalDate fechaRealizacion;
    private Inventario inventario;

    private int id;

    public Reserva() {
    }

    public Reserva(int id, int numero, Miembro miembro, LocalDate fechaRealizacion, Inventario inventario, EstadoReserva estado) {
        this.id = id;
        this.numero = numero;
        this.miembro = miembro;
        this.fechaRealizacion = fechaRealizacion;
        this.inventario = inventario;
        this.estado = estado;
    }

    public Reserva(int numero, Miembro miembro, LocalDate fechaRealizacion, Inventario inventario, EstadoReserva estado) {
        this.numero = numero;
        this.miembro = miembro;
        this.fechaRealizacion = fechaRealizacion;
        this.inventario = inventario;
        this.estado = estado;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public EstadoReserva getEstado() {
        return estado;
    }

    public void setEstado(EstadoReserva estado) {
        this.estado = estado;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Reserva{" + "estado=" + estado + ", description='" + description + '\'' + ", numero=" + numero + ", miembro=" + miembro + ", fechaRealizacion=" + fechaRealizacion + ", inventario=" + inventario + ", id=" + id + '}';
    }
}
