package jimmy.alvarez.bl.entities.yacimiento;

import jimmy.alvarez.bl.entities.elemento.Elemento;

import java.time.LocalDate;

public class Yacimientos {
    private int unidadesDispo;
    private Ubicacion UBICACION;
    private LocalDate fecha, horaRecoleccion;
    private Elemento elementoPrincipal;
    private double unidadesAdicionales, ratioRecoleccion, factorUbicacion, factorHora, maxTiempoRecoleccion; // propiedades calculadas

    private int id;
    public Yacimientos() {
    }

    public Yacimientos(LocalDate fecha, LocalDate horaRecoleccion, Elemento elementoPrincipal, double unidadesAdicionales, double ratioRecoleccion, double factorUbicacion, double factorHora) {
        this.fecha = fecha;
        this.horaRecoleccion = horaRecoleccion;
        this.elementoPrincipal = elementoPrincipal;
        this.unidadesAdicionales = 0;
        this.ratioRecoleccion = 0;
        this.factorUbicacion = 0;
        this.factorHora = 0;
    }

    public int getUnidadesDispo() {
        return unidadesDispo;
    }

    public void setUnidadesDispo(int unidadesDispo) {
        this.unidadesDispo = unidadesDispo;
    }

    public double getMaxTiempoRecoleccion() {
        return maxTiempoRecoleccion;
    }

    public void setMaxTiempoRecoleccion(double maxTiempoRecoleccion) {
        this.maxTiempoRecoleccion = maxTiempoRecoleccion;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalDate getHoraRecoleccion() {
        return horaRecoleccion;
    }

    public void setHoraRecoleccion(LocalDate horaRecoleccion) {
        this.horaRecoleccion = horaRecoleccion;
    }

    public Elemento getElementoPrincipal() {
        return elementoPrincipal;
    }

    public Ubicacion getUBICACION() {
        return UBICACION;
    }

    public void setUBICACION(Ubicacion UBICACION) {
        this.UBICACION = UBICACION;
    }

    public double getUnidadesAdicionales() {
        return unidadesAdicionales;
    }

    public void setUnidadesAdicionales(double unidadesAdicionales) {
        this.unidadesAdicionales = unidadesAdicionales;
    }

    public double getRatioRecoleccion() {
        return ratioRecoleccion;
    }

    public void setRatioRecoleccion(double ratioRecoleccion) {
        this.ratioRecoleccion = ratioRecoleccion;
    }

    public double getFactorUbicacion() {
        return factorUbicacion;
    }

    public void setFactorUbicacion(double factorUbicacion) {
        this.factorUbicacion = factorUbicacion;
    }

    public double getFactorHora() {
        return factorHora;
    }

    public void setFactorHora(double factorHora) {
        this.factorHora = factorHora;
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

    @Override
    public String toString() {
        return "Yacimientos{" +
                "unidadesDispo=" + unidadesDispo +
                ", maxTiempoRecoleccion=" + maxTiempoRecoleccion +
                ", UBICACION=" + UBICACION +
                ", fecha=" + fecha +
                ", horaRecoleccion=" + horaRecoleccion +
                ", elementoPrincipal=" + elementoPrincipal +
                ", unidadesAdicionales=" + unidadesAdicionales +
                ", ratioRecoleccion=" + ratioRecoleccion +
                ", factorUbicacion=" + factorUbicacion +
                ", factorHora=" + factorHora +
                ", id=" + id +
                '}';
    }
}
