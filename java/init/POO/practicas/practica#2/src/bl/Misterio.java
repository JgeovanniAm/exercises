package bl;

public class Misterio extends Libro {
    private final TiposLibros CATEGORIA= TiposLibros.MISTERIO;

    public Misterio() {}

    public Misterio(String titulo, String autor, String ibsm, double precio) {
        super(titulo, autor, ibsm, precio);
    }

    public TiposLibros getCATEGORIA() {
        return CATEGORIA;
    }

    @Override
    public String toString() {
        return "Fantasia{" +
                "Libro="+ super.toString() +
                "TIPO= " + CATEGORIA + '\'' +
                '}';
    }
}
