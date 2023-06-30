package bl;

public class YA extends Libro {
    private final TiposLibros CATEGORIA= TiposLibros.YA;

    public YA() {}

    public YA(String titulo, String autor, String ibsm, double precio) {
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
