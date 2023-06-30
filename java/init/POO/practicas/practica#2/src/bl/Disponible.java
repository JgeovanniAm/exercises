package bl;

import java.time.LocalDate;

public class Disponible extends Reserva{
    private final EstadoReserva TIPO= EstadoReserva.DISPONIBLE;

    private String description="";


    public Disponible(String description) {
        this.description = description;
    }

    public Disponible(int numero, Miembro miembro, LocalDate fechaRealizacion, Inventario inventario, String description) {
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
                "TIPO='" + TIPO + '\'' +
                ", description= " + description + '\'' +
                '}';
    }
}
