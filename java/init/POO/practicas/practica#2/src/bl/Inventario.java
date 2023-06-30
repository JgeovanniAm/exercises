package bl;

public class Inventario {
    private Libro libro;
    private boolean estado;

    private int cantidad;

    public Inventario(){}

    public Inventario(Libro libro, int cantidad) {
        this.libro = libro;
        this.cantidad = cantidad;
        this.estado = true;
    }

    public Libro getLibro() {
        return libro;
    }

    public void setLibro(Libro libro) {
        this.libro = libro;
    }


    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
    public boolean isEstado() {
        return estado;
    }
    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Inventario{" +
                "libro=" + libro +
                ", estado=" + estado +
                ", cantidad=" + cantidad +
                '}';
    }
}
