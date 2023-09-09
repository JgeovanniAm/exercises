package jimmy.alvarez.bl.entities.alquimista;

import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.elemento.ElementosRecolectados;
import jimmy.alvarez.bl.entities.tierra.Tierra;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;

public class Alquimista {
    private String nombre, correo, contrasena;
    private LocalDate fechaNacimiento;
    private int edad;
    private Elemento elementoPrincipal;
    private Tipos tipo;

    private double riqueza;
    private ArrayList<Tierra> tierras = new ArrayList<>();

    private ArrayList<ElementosRecolectados> elementosRecolectados = new ArrayList<>();

    private int id;

    public Alquimista() {
    }

    public Alquimista(String nombre, String correo, String contrasena, LocalDate fechaNacimiento) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = Period.between(this.fechaNacimiento, LocalDate.now()).getYears();
    }

    public Alquimista(String nombre, String correo, String contrasena, LocalDate fechaNacimiento, Elemento elementoPrincipal) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = Period.between(this.fechaNacimiento, LocalDate.now()).getYears();
        this.elementoPrincipal = elementoPrincipal;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public int getEdad() {
        edad = Period.between(this.fechaNacimiento, LocalDate.now()).getYears();
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public Elemento getElementoPrincipal() {
        return elementoPrincipal;
    }

    public void setElementoPrincipal(Elemento elementoPrincipal) {
        this.elementoPrincipal = elementoPrincipal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getRiqueza() {
        return riqueza;
    }

    public void setRiqueza(double riqueza) {
        this.riqueza = riqueza;
    }

    public ArrayList<Tierra> getTierras() {
        return tierras;
    }

    public void setTierras(ArrayList<Tierra> tierras) {
        this.tierras = tierras;
    }

    public ArrayList<ElementosRecolectados> getElementosRecolectados() {
        return elementosRecolectados;
    }

    public void setElementosRecolectados(ArrayList<ElementosRecolectados> elementosRecolectados) {
        this.elementosRecolectados = elementosRecolectados;
    }

    public Tipos getTipo() {
        return tipo;
    }

    public void setTipo(Tipos tipo) {
        this.tipo = tipo;
    }

    @Override
    public String toString() {
        return "Alquimista{" +
                "nombre='" + nombre + '\'' +
                ", correo='" + correo + '\'' +
                ", contrasena='" + contrasena + '\'' +
                ", fechaNacimiento=" + fechaNacimiento +
                ", edad=" + edad +
                ", elementoPrincipal=" + elementoPrincipal +
                ", tipo=" + tipo +
                ", riqueza=" + riqueza +
                ", tierras=" + tierras +
                ", elementosRecolectados=" + elementosRecolectados +
                ", id=" + id +
                '}';
    }
}
