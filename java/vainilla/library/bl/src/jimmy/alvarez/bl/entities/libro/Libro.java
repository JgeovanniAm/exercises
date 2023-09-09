package jimmy.alvarez.bl.entities.libro;

public class Libro {
    private Categoria categoria;
    private String titulo;
    private String autor;
    private String ibsm;
    private double precio;

    private int id;

    public Libro() {
    }

    public Libro(int id, String titulo, String autor, String ibsm, double precio, Categoria categoria) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ibsm = ibsm;
        this.precio = precio;
        this.categoria = categoria;
    }

    public Libro(String titulo, String autor, String ibsm, double precio, Categoria categoria) {
        this.titulo = titulo;
        this.autor = autor;
        this.ibsm = ibsm;
        this.precio = precio;
        this.categoria = categoria;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        return "Libro{" + "categoria=" + categoria + ", titulo='" + titulo + '\'' + ", autor='" + autor + '\'' + ", ibsm=" + ibsm + ", precio=" + precio + ", id=" + id + '}';
    }
}
