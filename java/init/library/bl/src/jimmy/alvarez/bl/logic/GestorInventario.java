package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.dl.ConnectionDB;
import jimmy.alvarez.dl.InventarioDAO;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class GestorInventario implements IGestor<Inventario> {
    private final InventarioDAO inventarioDAO;

    public GestorInventario() {
        ConnectionDB connectionDB = ConnectionDB.getInstance();
        this.inventarioDAO = new InventarioDAO(connectionDB);
    }

    @Override
    public Response registrar(Inventario inventario) {
        return this.inventarioDAO.registrar(inventario);
    }

    @Override
    public Response update(int id, Inventario inventario) {
        return this.inventarioDAO.update(id, inventario);
    }

    @Override
    public Response getAll() {
        return this.inventarioDAO.getAll();
    }

    @Override
    public Response delete(int id) {
        return this.inventarioDAO.delete(id);
    }

    @Override
    public Response find(int id) {
        return null;
    }
}
