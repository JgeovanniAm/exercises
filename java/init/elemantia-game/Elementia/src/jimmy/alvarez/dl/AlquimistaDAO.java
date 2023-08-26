package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.alquimista.Tipos;
import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class AlquimistaDAO {
    protected ConnectionDB connectioDB;

    public AlquimistaDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    public Response iniciarSession(Alquimista alquimista) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB,
                    "inicioSessionAlquimista",
                    alquimista.getCorreo(),
                    alquimista.getContrasena());

            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(alquimista.getCorreo());
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("Inicio session Error invalid User" + e.getMessage());
            return res;
        }
    }

    public Response registrarAlquimista(Alquimista alquimista) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB
                    , "registroDeAlquimista",
                    alquimista.getNombre(),
                    alquimista.getFechaNacimiento().toString(),
                    alquimista.getCorreo(),
                    alquimista.getContrasena()
            );
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(alquimista.getCorreo());
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("registrarAlquimista" + e.getMessage());
            return res;
        }
    }

    public Response verAlquimista(Alquimista alquimista) {
        Response res = new Response();
        try {
            String query = "SELECT * FROM visualizarAlquimista(?)";
            Response result = UtilDAO.executeQueries(connectioDB, query, alquimista.getCorreo());
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            ArrayList<Alquimista> alquimistas = new ArrayList<>();
            ArrayList<Table> tables = (ArrayList<Table>) result.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Alquimista alquimistaObject = new Alquimista();
                Elemento elemento = new Elemento();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "tipo":
                            if (col.getValue().equals("Aldeano")) {
                                alquimistaObject.setTipo(Tipos.ALDEANO);
                            } else {
                                alquimistaObject.setTipo(Tipos.REY);
                            }
                            break;
                        case "alquimistaID":
                            alquimistaObject.setId((Integer) col.getValue());
                            break;
                        case "nombre":
                            alquimistaObject.setNombre((String) col.getValue());
                            break;
                        case "correo":
                            alquimistaObject.setCorreo((String) col.getValue());
                            break;
                        case "fechaNacimiento":
                            alquimistaObject.setFechaNacimiento((LocalDate) col.getValue());
                            break;
                        case "riqueza":
                            alquimistaObject.setRiqueza((Double) col.getValue());
                            break;
                        case "color":
                            elemento.setColor((String) col.getValue());
                            break;
                        case "elementoID":
                            elemento.setId((int) col.getValue());
                            break;
                        case "nombreElemento":
                            elemento.setNombre((String) col.getValue());
                            break;
                        case "numeroAtomico":
                            elemento.setNumAtom((int) col.getValue());
                            break;
                        case "precioSugerido":
                            elemento.setPrecioSuger((double) col.getValue());
                            break;
                        case "simbolo":
                            elemento.setSimbolo((String) col.getValue());
                            break;
                        default:
                            break;
                    }
                    alquimistaObject.setElementoPrincipal(elemento);
                }
                alquimistas.add(alquimistaObject);
            }
            res.setOk(true);
            res.setBody(alquimistas);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("verAlquimista" + e.getMessage());
            return res;
        }
    }

    public Response verTopAlquimistas() {
        Response res = new Response();
        try {
            String query = "SELECT * FROM visualizarAlquimista(?)";
            Response result = UtilDAO.executeViews(connectioDB, "topAlquimistas");
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            ArrayList<Alquimista> alquimistas = new ArrayList<>();
            ArrayList<Table> tables = (ArrayList<Table>) result.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Alquimista alquimistaObject = new Alquimista();
                Elemento elemento = new Elemento();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "tipo":
                            if (col.getValue().equals("Aldeano")) {
                                alquimistaObject.setTipo(Tipos.ALDEANO);
                            } else {
                                alquimistaObject.setTipo(Tipos.REY);
                            }
                            break;
                        case "alquimistaID":
                            alquimistaObject.setId((Integer) col.getValue());
                            break;
                        case "nombre":
                            alquimistaObject.setNombre((String) col.getValue());
                            break;
                        case "correo":
                            alquimistaObject.setCorreo((String) col.getValue());
                            break;
                        case "fechaNacimiento":
                            alquimistaObject.setFechaNacimiento((LocalDate) col.getValue());
                            break;
                        case "riqueza":
                            alquimistaObject.setRiqueza((Double) col.getValue());
                            break;
                        case "color":
                            elemento.setColor((String) col.getValue());
                            break;
                        case "elementoID":
                            elemento.setId((int) col.getValue());
                            break;
                        case "nombreElemento":
                            elemento.setNombre((String) col.getValue());
                            break;
                        case "numeroAtomico":
                            elemento.setNumAtom((int) col.getValue());
                            break;
                        case "precioSugerido":
                            elemento.setPrecioSuger((double) col.getValue());
                            break;
                        case "simbolo":
                            elemento.setSimbolo((String) col.getValue());
                            break;
                        default:
                            break;
                    }
                }
                alquimistas.add(alquimistaObject);
            }
            res.setOk(true);
            res.setBody(alquimistas);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("verTopAlquimistas" + e.getMessage());
            return res;
        }
    }

}
