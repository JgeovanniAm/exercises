package jimmy.alvarez.bl.entities.miembro;

import java.time.LocalDate;

public class Miembro {
    private String nombre;
    private String contrasena;
    private String correo;
    private String rol;
    private LocalDate fechaNacimiento;
    private int edad;
    private String direccion;
    private String genero;
    private int id;

    public Miembro() {
        this.rol = "Estudiante";
    }

    public Miembro(String nombre, String correo, String contrasena, LocalDate fechaNacimiento, String direccion, String genero) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.rol = "Estudiante";
        this.fechaNacimiento = fechaNacimiento;
        this.edad = (this.fechaNacimiento.getYear() - LocalDate.now().getYear());
        this.direccion = direccion;
        this.genero = genero;
    }

    public Miembro(int id, String nombre, String correo, String contrasena, LocalDate fechaNacimiento, String direccion, String genero) {
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.correo = correo;
        this.rol = "Estudiante";
        this.fechaNacimiento = fechaNacimiento;
        this.edad = (this.fechaNacimiento.getYear() - LocalDate.now().getYear());
        this.direccion = direccion;
        this.genero = genero;
        this.id = id;
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

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "jimmy.alvarez.bl.entities.miembro.Miembro{" + "nombre='" + nombre + '\'' + ", contrasena='" + contrasena + '\'' + ", correo='" + correo + '\'' + ", rol='" + rol + '\'' + ", fechaNacimiento=" + fechaNacimiento + ", edad=" + edad + ", direccion='" + direccion + '\'' + ", genero='" + genero + '\'' + '}';
    }
}

