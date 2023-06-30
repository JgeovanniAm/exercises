package bl;

import java.time.LocalDate;

public class Reservado extends Reserva{
    private final EstadoReserva TIPO= EstadoReserva.RESERVADO;

    private String description="";


    public Reservado(String description) {
        this.description = description;
    }

    public Reservado(int numero, Miembro miembro, LocalDate fechaRealizacion, Inventario inventario, String description) {
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
