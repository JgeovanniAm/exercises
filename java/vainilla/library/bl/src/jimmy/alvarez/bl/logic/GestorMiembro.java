package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.dl.ConnectionDB;
import jimmy.alvarez.dl.MiembroDAO;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorMiembro implements IGestor<Miembro> {

    private final MiembroDAO miembroDAO;

    public GestorMiembro() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.miembroDAO = new MiembroDAO(connectionDB);
    }

    public Response registrar(Miembro miembro) {
        System.out.println(miembro.getDireccion());
        return this.miembroDAO.registrar(miembro);
    }

    @Override
    public Response update(int id, Miembro miembro) {
        return this.miembroDAO.update(id, miembro);
    }

    @Override
    public Response getAll() {
        return this.miembroDAO.getAll();
    }


    @Override
    public Response delete(int id) {
        return this.miembroDAO.delete(id);
    }

    @Override
    public Response find(int id) {
        return null;
    }
}
