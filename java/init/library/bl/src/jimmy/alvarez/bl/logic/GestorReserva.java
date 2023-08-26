package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.reserva.Reserva;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.dl.ConnectionDB;
import jimmy.alvarez.dl.ReservaDAO;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorReserva implements IGestor<Reserva> {
    private final ReservaDAO reservaDAO;

    public GestorReserva() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.reservaDAO = new ReservaDAO(connectionDB);
    }

    public Response registrar(Reserva reserva) {
        return reservaDAO.registrar(reserva);
    }

    @Override
    public Response update(int id, Reserva reserva) {
        return reservaDAO.update(id, reserva);
    }

    @Override
    public Response getAll() {
        return reservaDAO.getAll();
    }

    @Override
    public Response delete(int id) {
        return reservaDAO.delete(id);
    }

    @Override
    public Response find(int id) {
        return null;
    }
}
