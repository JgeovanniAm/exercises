public class Libro {
    private String titulo;
    private String autor;
    private String genero;
    private String ibsm;
    private double precio;
    private String categoria;
    private int cantidad;
    private String estado;

    public  Libro(){}
    public  Libro(String titulo, String autor, String genero, String ibsm, double precio, String categoria, int cantidad, String estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ibsm = ibsm;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.estado = estado;
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

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
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

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Libro{" +
                "titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                ", genero='" + genero + '\'' +
                ", ibsm='" + ibsm + '\'' +
                ", precio=" + precio +
                ", categoria='" + categoria + '\'' +
                ", cantidad=" + cantidad +
                ", estado=" + estado +
                '}';
    }
}
