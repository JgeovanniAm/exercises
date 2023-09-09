package jimmy.alvarez.bl.entities.tierra;

import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.yacimiento.Yacimientos;

import java.util.ArrayList;


public class Tierra {
    private String nombre;
    private double precioSuger, precioFinal, impuesto;
    private Estado estado = Estado.DISPONIBLE;
    private  Tipos tipo;
    private Elemento elementoPrincipal;
    private int id;

    protected int cantidadMaxYacimientos;
    protected ArrayList<Yacimientos> yacimientos = new ArrayList<>();

    public Tierra() {
    }

    public Tierra(String nombre, double precioSuger, Tipos tipo) {
        this.nombre = nombre;
        this.precioSuger = precioSuger;
        this.tipo = tipo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecioSuger() {
        return precioSuger;
    }

    public void setPrecioSuger(double precioSuger) {
        this.precioSuger = precioSuger;
    }

    public double getPrecioFinal() {
        precioFinal = precioSuger + (precioSuger * impuesto);
        return precioFinal;
    }

    public void setPrecioFinal(double precioFinal) {
        this.precioFinal = precioFinal;
    }

    public double getImpuesto() {
        return impuesto;
    }

    public void setImpuesto(double impuesto) {
        this.impuesto = impuesto;
    }

    public Estado isEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public Elemento getElementoPrincipal() {
        return elementoPrincipal;
    }

    public void setElementoPrincipal(Elemento elementoPrincipal) {
        this.elementoPrincipal = elementoPrincipal;
    }

    public ArrayList<Yacimientos> getYacimientos() {
        return yacimientos;
    }

    public void setYacimientos(ArrayList<Yacimientos> yacimientos) {
        this.yacimientos = yacimientos;
    }

    public Estado getEstado() {
        return estado;
    }

    public int getCantidadMaxYacimientos() {
        return cantidadMaxYacimientos;
    }

    public void setCantidadMaxYacimientos(int cantidadMaxYacimientos) {
        this.cantidadMaxYacimientos = cantidadMaxYacimientos;
    }

    public Tipos getTipo() {
        return tipo;
    }

    public void setTipo(Tipos tipo) {
        this.tipo = tipo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Tierra{" +
                "nombre='" + nombre + '\'' +
                ", precioSuger=" + precioSuger +
                ", precioFinal=" + precioFinal +
                ", impuesto=" + impuesto +
                ", estado=" + estado +
                ", tipo=" + tipo +
                ", elementoPrincipal=" + elementoPrincipal +
                ", id=" + id +
                ", cantidadMaxYacimientos=" + cantidadMaxYacimientos +
                ", yacimientos=" + yacimientos +
                '}';
    }
}
