package bl;

public class Infantil extends Libro {
    private final TiposLibros CATEGORIA= TiposLibros.INFANTIL;


    public Infantil() {}

    public Infantil(String titulo, String autor, String ibsm, double precio) {
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
