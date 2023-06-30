import java.util.ArrayList;

public class Inventario {
    private ArrayList<Libro> libros;

    public Inventario(){}

    public Inventario(ArrayList<Libro> libros) {
        this.libros = libros;
    }

    public ArrayList<Libro> getLibros() {
        return libros;
    }

    public void setLibros(ArrayList<Libro> libros) {
        this.libros = libros;
    }

    @Override
    public String toString() {
        return "Inventario{" +
                "libros=" + libros +
                '}';
    }
}
