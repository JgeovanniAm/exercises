package jimmy.alvarez.bl.entities.elemento;

public class ElementosRecolectados {
    private double cantidad;
    private Elemento elemento;

    public ElementosRecolectados() {
    }

    public ElementosRecolectados(int cantidad, Elemento elemento) {
        this.cantidad = cantidad;
        this.elemento = elemento;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public Elemento getElemento() {
        return elemento;
    }

    public void setElemento(Elemento elemento) {
        this.elemento = elemento;
    }

    @Override
    public String toString() {
        return "elementosRecolectados{" +
                "cantidad=" + cantidad +
                ", elemento=" + elemento +
                '}';
    }
}
