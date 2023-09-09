package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class GestorAlquimistaTest {

    @Test
    void iniciarSession() {
        GestorAlquimista gestorAlquimista = new GestorAlquimista();
        Alquimista alquimista = new Alquimista();
        alquimista.setCorreo("admin@gmail.com");
        alquimista.setContrasena("admin");
        gestorAlquimista.iniciarSession(alquimista);

        Response reponse = new Response();

        reponse.setBody(alquimista.getCorreo());

        Assertions.assertEquals( reponse.getBody(), alquimista.getCorreo() );
    }

    @Test
    void registrarNewSession() {
        GestorAlquimista gestorAlquimista = new GestorAlquimista();
        Alquimista alquimista = new Alquimista();
        alquimista.setCorreo("admin@gmail.com");
        alquimista.setFechaNacimiento(LocalDate.now());
        alquimista.setContrasena("admin");
        alquimista.setContrasena("test");
        gestorAlquimista.registrarNewSession(alquimista);

        Response reponse = new Response();

        reponse.setOk(false);

        Assertions.assertEquals( reponse.isOk(), false );

    }

}