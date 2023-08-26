package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.libro.Categoria;
import jimmy.alvarez.bl.entities.libro.Libro;
import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.reserva.EstadoReserva;
import jimmy.alvarez.bl.entities.reserva.Reserva;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class ReservaDAO extends AbstractDAO<Reserva> {

    public ReservaDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    @Override
    public Response registrar(Reserva reserva) {
        try {
            return this.executeProcedure("createReserva", reserva.getMiembro().getId(), reserva.getInventario().getId(), reserva.getEstado().ordinal() + 1);
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor reserva registrar" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response update(int id, Reserva reserva) {
        try {
            return this.executeProcedure("updateReserva", id, reserva.getMiembro().getId(), reserva.getInventario().getId(), reserva.getEstado().ordinal() + 1, reserva.getFechaRealizacion().toString());
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor reserva update" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response delete(int id) {
        try {
            return this.executeProcedure("deleteReserva", id);
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor reserva delete" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response getAll() {
        try {
            ArrayList<Reserva> listReserva = new ArrayList<>();
            Response response = this.executeViews("reservaView");
            ArrayList<Table> tables = (ArrayList<Table>) response.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Reserva reserva = new Reserva();
                Inventario inventario = new Inventario();
                Libro libro = new Libro();
                Miembro miembro = new Miembro();

                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "reservaID":
                            reserva.setId((Integer) col.getValue());
                            break;
                        case "contrasena":
                            miembro.setContrasena((String) col.getValue());
                            break;
                        case "correo":
                            miembro.setCorreo((String) col.getValue());
                            break;
                        case "dirreccion":
                            miembro.setDireccion((String) col.getValue());
                            break;
                        case "fechaNacimiento":
                            miembro.setFechaNacimiento((LocalDate) col.getValue());
                            break;
                        case "genero":
                            miembro.setGenero((String) col.getValue());
                            break;
                        case "miembroId":
                            miembro.setId((Integer) col.getValue());
                            break;
                        case "miembroNombre":
                            miembro.setNombre((String) col.getValue());
                            break;
                        case "estadoReservaId":
                            reserva.setEstado(EstadoReserva.values()[(int) col.getValue() - 1]);
                            break;
                        case "cantidad":
                            inventario.setCantidad((Integer) col.getValue());
                            break;
                        case "inventarioId":
                            inventario.setId((Integer) col.getValue());
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
                        case "tipoLibroId":
                            libro.setCategoria(Categoria.values()[(int) col.getValue() - 1]);
                            break;
                        case "precio":
                            libro.setPrecio((Double) col.getValue());
                            break;
                        case "fechaRealizacion":
                            reserva.setFechaRealizacion((LocalDate) col.getValue());
                            break;
                        default:
                            break;
                    }
                    inventario.setLibro(libro);
                }
                reserva.setMiembro(miembro);
                reserva.setInventario(inventario);
                listReserva.add(reserva);
            }
            response.setBody(listReserva);
            return response;
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor reserva getall" + e.getMessage());
            return response;
        }
    }

    @Override
    public void find(int id) {
    }
}
