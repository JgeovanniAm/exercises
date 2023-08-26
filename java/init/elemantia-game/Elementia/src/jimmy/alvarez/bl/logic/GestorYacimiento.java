package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.dl.ConnectionDB;
import jimmy.alvarez.dl.YacimientoDAO;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorYacimiento {
    private final YacimientoDAO yacimientoDAO;

    public GestorYacimiento() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.yacimientoDAO = new YacimientoDAO(connectionDB);
    }

    public Response crearYacimiento(Tierra tierra) {
        return yacimientoDAO.crearYacimientos(tierra);
    }

    public Response verYacimientosTierra(int idTierra) {
        return yacimientoDAO.verYacimientosTierra(idTierra);
    }

    public Response recogerElemento(double cantidad, int yacimientoID, int tierraID, int alquimistaID) {
        return yacimientoDAO.recogerElemento(cantidad, yacimientoID, tierraID, alquimistaID);
    }
}
