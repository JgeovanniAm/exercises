package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.dl.AlquimistaDAO;
import jimmy.alvarez.dl.ConnectionDB;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorAlquimista {
    private final AlquimistaDAO alquimistaDAO;

    public GestorAlquimista() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.alquimistaDAO = new AlquimistaDAO(connectionDB);
    }

    public Response iniciarSession(Alquimista alquimista) {
        return alquimistaDAO.iniciarSession(alquimista);
    }

    public Response registrarNewSession(Alquimista alquimista) {
        return alquimistaDAO.registrarAlquimista(alquimista);
    }

    public Response verAlquimista(Alquimista alquimista) {
        return alquimistaDAO.verAlquimista(alquimista);
    }

    public Response verTopAlquimistas() {
        return alquimistaDAO.verTopAlquimistas();
    }
}
