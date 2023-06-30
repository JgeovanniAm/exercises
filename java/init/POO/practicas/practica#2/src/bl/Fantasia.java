package bl;

public class Fantasia extends Libro {
    private final TiposLibros CATEGORIA= TiposLibros.FANTASIA;

    public Fantasia() {}

    public Fantasia(String titulo, String autor, String ibsm, double precio) {
        super(titulo, autor, ibsm, precio);
    }

    public TiposLibros getCATEGORIA() {
        return CATEGORIA;
    }

    @Override
    public String toString() {
        return "Fantasia{" +
                "Libro="+ super.toString() +
                "CATEGORIA= " + CATEGORIA + '\'' +
                '}';
    }
}
