package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.bl.entities.tierra.Tipos;
import jimmy.alvarez.bl.logic.GestorTierras;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TierrasDAOTest {

    @Test
    void registarTierras() {
        GestorTierras gestorTierras = new GestorTierras();
        Tierra tierra = new Tierra();
        tierra.setNombre("test unit");
        tierra.setPrecioSuger(300);
        tierra.setTipo(Tipos.RARA);
        gestorTierras.registarTierras(tierra, false);

        Response reponse = new Response();

        reponse.setBody(tierra);

        Assertions.assertEquals(reponse.getBody(), tierra);
    }
}