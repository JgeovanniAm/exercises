package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.libro.Categoria;
import jimmy.alvarez.bl.entities.libro.Libro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;

import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class InventarioDAO extends AbstractDAO<Inventario> {

    public InventarioDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    @Override
    public Response registrar(Inventario inventario) {
        try {
            return executeProcedure("createLibroInventario", inventario.getCantidad(), inventario.getLibro().getPrecio(), inventario.getLibro().getIbsm(), inventario.getLibro().getTitulo(), inventario.getLibro().getAutor(), inventario.getLibro().getCategoria().ordinal() + 1);
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor inv resgistrar" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response update(int id, Inventario inventario) {
        try {
            return executeProcedure("updateLibroInventario", id, inventario.getCantidad(), inventario.getLibro().getPrecio(), inventario.getLibro().getIbsm(), inventario.getLibro().getTitulo(), inventario.getLibro().getAutor(), inventario.getLibro().getCategoria().ordinal() + 1);
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor inv update" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response delete(int id) {
        try {
            return executeProcedure("deleteLibroInventario", id);
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor inv update" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response getAll() {
        try {
            ArrayList<Inventario> listInventarios = new ArrayList<>();
            Response response = this.executeViews("inventariosView");
            ArrayList<Table> tables = (ArrayList<Table>) response.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Inventario inventario = new Inventario();
                Libro libro = new Libro();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "inventarioId":
                            inventario.setId((Integer) col.getValue());
                            break;
                        case "cantidad":
                            inventario.setCantidad((Integer) col.getValue());
                            break;
                        case "categoria":
                            libro.setCategoria(Categoria.values()[(int) col.getValue() - 1]);
                            break;
                        case "author":
                            libro.setAutor((String) col.getValue());
                            break;
                        case "titulo":
                            libro.setTitulo((String) col.getValue());
                            break;
                        case "libroId":
                            libro.setId((Integer) col.getValue());
                            break;
                        case "ibsm":
                            libro.setIbsm((String) col.getValue());
                            break;
                        case "precio":
                            libro.setPrecio((Double) col.getValue());
                            break;
                        default:
                            break;
                    }
                    inventario.setLibro(libro);
                }
                listInventarios.add(inventario);
            }
            response.setBody(listInventarios);
            return response;
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor inv get all" + e.getMessage());
            return response;
        }
    }

    @Override
    public void find(int id) {
    }
}
