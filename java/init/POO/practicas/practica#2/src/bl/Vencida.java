package bl;

import java.time.LocalDate;

public class Vencida extends Reserva{
    private final EstadoReserva TIPO = EstadoReserva.VENCIDA;

    private String description="";

    public Vencida(String description) {
        this.description = description;
    }

    public Vencida(int numero, Miembro miembro, LocalDate fechaRealizacion, Inventario inventario, String description) {
        super(numero, miembro, fechaRealizacion, inventario);
        this.description = description;
    }

    public EstadoReserva getTIPO() {
        return TIPO;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Vencida{" +
                "reserva=" + super.toString() +
                "TIPO= " + TIPO + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
