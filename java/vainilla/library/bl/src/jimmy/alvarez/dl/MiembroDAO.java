package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class MiembroDAO extends AbstractDAO<Miembro> {
    public MiembroDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    @Override
    public Response registrar(Miembro miembro) {
        try {
            return this.executeProcedure("createMember",
                    miembro.getNombre(),
                    miembro.getGenero(),
                    miembro.getCorreo(),
                    miembro.getFechaNacimiento().toString(),
                    miembro.getContrasena(),
                    miembro.getRol(),
                    miembro.getDireccion()
            );
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor miembro registrar" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response update(int id, Miembro miembro) {
        try {
            return this.executeProcedure(
                    "updateMiembro",
                    id,
                    miembro.getNombre(),
                    miembro.getGenero(),
                    miembro.getCorreo(),
                    miembro.getFechaNacimiento().toString(),
                    miembro.getContrasena(),
                    miembro.getRol(),
                    miembro.getDireccion()
            );
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor miembro update" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response delete(int id) {
        try {
            return this.executeProcedure("deleteMiembro",
                    id
            );
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor miembro delete" + e.getMessage());
            return response;
        }
    }

    @Override
    public Response getAll() {
        try {
            ArrayList<Miembro> listMiembros = new ArrayList<>();
            Response response = this.executeViews("miembrosView");
            ArrayList<Table> tables = (ArrayList<Table>) response.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Miembro miembro = new Miembro();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "miembroId":
                            miembro.setId((Integer) col.getValue());
                            break;
                        case "dirreccion":
                            miembro.setDireccion((String) col.getValue());
                            break;
                        case "rol":
                            miembro.setRol((String) col.getValue());
                            break;
                        case "contrasena":
                            miembro.setContrasena((String) col.getValue());
                            break;
                        case "fechaNacimiento":
                            miembro.setFechaNacimiento((LocalDate) col.getValue());
                            break;
                        case "correo":
                            miembro.setCorreo((String) col.getValue());
                            break;
                        case "nombre":
                            miembro.setNombre((String) col.getValue());
                            break;
                        case "genero":
                            miembro.setGenero((String) col.getValue());
                            break;
                        default:
                            break;
                    }
                }
                listMiembros.add(miembro);
            }
            response.setBody(listMiembros);
            return response;
        } catch (Exception e) {
            Response response = new Response();
            response.setError("Error has... in gestor miembro getall" + e.getMessage());
            return response;
        }
    }

    @Override
    public void find(int id) {

    }
}
