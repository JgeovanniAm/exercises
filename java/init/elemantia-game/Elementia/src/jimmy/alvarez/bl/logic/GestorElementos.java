package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.dl.ConnectionDB;
import jimmy.alvarez.dl.ElementosDAO;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorElementos {

    private final ElementosDAO elementosDAO;

    public GestorElementos() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.elementosDAO = new ElementosDAO(connectionDB);
    }

    public Response registarElementos(Elemento elemento) {
        return elementosDAO.registarElementos(elemento);
    }

    public Response verElementosRecolectados(Alquimista alquimista) {
        return elementosDAO.verElementosRecolectados(alquimista);
    }

    public Response ventaDeElementos(int elementoID, double cantidad, int alquimistaID) {
        return elementosDAO.ventaDeElementos(elementoID, cantidad, alquimistaID);
    }
}
