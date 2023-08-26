package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.elemento.ElementosRecolectados;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;

import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class ElementosDAO {

    protected ConnectionDB connectioDB;

    public ElementosDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    public Response registarElementos(Elemento elemento) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB
                    , "registroDeElementos",
                    elemento.getNombre(),
                    elemento.getSimbolo(),
                    elemento.getColor(),
                    elemento.getNumAtom(),
                    elemento.getColorHex(),
                    elemento.getPrecioSuger()
            );
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(elemento);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("registarElementos" + e.getMessage());
            return res;
        }
    }

    public Response verElementosRecolectados(Alquimista alquimista) {
        Response res = new Response();
        try {
            String query = "SELECT * FROM visualizarElementosRecolectados(?)";
            Response result = UtilDAO.executeQueries(connectioDB, query, alquimista.getId());
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            ArrayList<ElementosRecolectados> elementosRecolectados = new ArrayList<>();
            ArrayList<Table> tables = (ArrayList<Table>) result.getBody();

            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                ElementosRecolectados elementosRecolectado = new ElementosRecolectados();
                Elemento elemento = new Elemento();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "cantidad":
                            elementosRecolectado.setCantidad((double) col.getValue());
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
                    elementosRecolectado.setElemento(elemento);
                }
                elementosRecolectados.add(elementosRecolectado);
            }

            res.setOk(true);
            res.setBody(elementosRecolectados);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("verElementosRecolectados" + e.getMessage());
            return res;
        }
    }

    public Response ventaDeElementos(int elementoID, double cantidad, int alquimistaID) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB,
                    "ventaDeElementos",
                    elementoID,
                    cantidad,
                    alquimistaID

            );
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(true);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("ventaDeElementos" + e.getMessage());
            return res;
        }
    }
}
