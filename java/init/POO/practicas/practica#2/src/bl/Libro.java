package bl;

public class Libro {
    private String titulo;
    private String autor;
    private String ibsm;
    private double precio;

    private final String genero = "Ciencia";

    public  Libro(){}
    public  Libro(String titulo, String autor, String ibsm, double precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.ibsm = ibsm;
        this.precio = precio;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getIbsm() {
        return ibsm;
    }

    public void setIbsm(String ibsm) {
        this.ibsm = ibsm;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    @Override
    public String toString() {
        return "bl.Libro{" +
                "titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                ", ibsm='" + ibsm + '\'' +
                ", precio=" + precio +
                '}';
    }
}
