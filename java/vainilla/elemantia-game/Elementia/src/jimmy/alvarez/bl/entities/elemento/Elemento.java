package jimmy.alvarez.bl.entities.elemento;

public class Elemento {
    private String nombre, simbolo, color, colorHex;
    private int numAtom;
    private double precioSuger;

    private int id;

    public Elemento() {
    }

    public Elemento(String nombre, String simbolo, String color, String colorHex, int numAtom, double precioSuger) {
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.color = color;
        this.colorHex = colorHex;
        this.numAtom = numAtom;
        this.precioSuger = precioSuger;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getSimbolo() {
        return simbolo;
    }

    public void setSimbolo(String simbolo) {
        this.simbolo = simbolo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getColorHex() {
        return colorHex;
    }

    public void setColorHex(String colorHex) {
        this.colorHex = colorHex;
    }

    public int getNumAtom() {
        return numAtom;
    }

    public void setNumAtom(int numAtom) {
        this.numAtom = numAtom;
    }

    public double getPrecioSuger() {
        return precioSuger;
    }

    public void setPrecioSuger(double precioSuger) {
        this.precioSuger = precioSuger;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Elemento{" + "nombre='" + nombre + '\'' + ", simbolo='" + simbolo + '\'' + ", color='" + color + '\'' + ", colorHex='" + colorHex + '\'' + ", numAtom=" + numAtom + ", precioSuger=" + precioSuger + '}';
    }
}
