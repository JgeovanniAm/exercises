package jimmy.alvarez.bl.entities.inventario;

import jimmy.alvarez.bl.entities.libro.Libro;

public class Inventario {
    private Libro libro;
    private boolean estado;
    private int cantidad;

    private int id;

    public Inventario() {
    }

    public Inventario(int id, Libro libro, int cantidad) {
        this.id = id;
        this.libro = libro;
        this.cantidad = cantidad;
        this.estado = true;
    }

    public Inventario(Libro libro, int cantidad) {
        this.id = id;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Inventario{" + "libro=" + libro + ", estado=" + estado + ", cantidad=" + cantidad + '}';
    }
}
