package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorAlquimista;
import jimmy.alvarez.bl.logic.GestorElementos;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class ElementosDAOTest {

    @Test
    void registarElementos() {
        GestorElementos gestorElementos = new GestorElementos();
        Elemento elemento = new Elemento();
        elemento.setNombre("Futrinno");
        elemento.setSimbolo("F");
        elemento.setColor("red");
        elemento.setNumAtom(2);
        elemento.setColorHex("#fff");
        elemento.setPrecioSuger(200);

       Response res =  gestorElementos.registarElementos(elemento);

        Response reponse = new Response();
        reponse.setOk(false); // because the price suggested  is less than 300
        Assertions.assertEquals( reponse.isOk(), res.isOk() );

    }
}