package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.dl.ConnectionDB;
import jimmy.alvarez.dl.TierrasDAO;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorTierras {
    private final TierrasDAO tierrasDAO;

    public GestorTierras() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.tierrasDAO = new TierrasDAO(connectionDB);
    }

    public Response verTierrasAlquimista(int id) {
        return tierrasDAO.verTierrasAlquimista(id);
    }

    public Response verTodasLasTierras() {
        return tierrasDAO.verTodasLasTierras();
    }

    public Response registarTierras(Tierra tierra, boolean hasTierra) {
        return tierrasDAO.registarTierras(tierra, hasTierra);
    }

    public Response comprarTierras(int tierraID, int alquimistaID, double gasto) {
        return tierrasDAO.comprarTierras(tierraID, alquimistaID, gasto);
    }
}
