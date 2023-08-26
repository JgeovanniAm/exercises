package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;
import jimmy.alvarez.bl.entities.tierra.Estado;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.bl.entities.tierra.Tipos;

import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class TierrasDAO {
    protected ConnectionDB connectioDB;

    public TierrasDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    public Response verTierrasAlquimista(int id) {
        Response res = new Response();
        try {
            String query = "SELECT * FROM visualizarTierrasAlquimista(?)";
            Response result = UtilDAO.executeQueries(connectioDB, query, id);
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            ArrayList<Tierra> tierras = new ArrayList<>();
            ArrayList<Table> tables = (ArrayList<Table>) result.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Tierra tierra = new Tierra();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "tierraID":
                            tierra.setId((Integer) col.getValue());
                            break;
                        case "nombre":
                            tierra.setNombre((String) col.getValue());
                            break;
                        case "precioSugerido":
                            tierra.setPrecioSuger((double) col.getValue());
                            break;
                        case "maxYacimientos":
                            tierra.setCantidadMaxYacimientos((int) col.getValue());
                            break;
                        case "impuesto":
                            tierra.setImpuesto((double) col.getValue());
                            break;
                        case "estadoTierraID":
                            tierra.setEstado(Estado.values()[(int) col.getValue() - 1]);
                            break;
                        case "tipoTierraID":
                            tierra.setTipo(Tipos.values()[(int) col.getValue() - 1]);
                            break;
                        case "elementoID":
                            Elemento elemento = new Elemento();
                            elemento.setId((int) col.getValue());
                            tierra.setElementoPrincipal(elemento);
                            break;
                        default:
                            break;
                    }
                }
                tierras.add(tierra);
            }
            res.setOk(true);
            res.setBody(tierras);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("verTierrasAlquimista" + e.getMessage());
            return res;
        }
    }

    public Response verTodasLasTierras() {
        Response res = new Response();
        try {
            String query = "SELECT * FROM tierra";
            Response result = UtilDAO.executeQueries(connectioDB, query);
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            ArrayList<Tierra> tierras = new ArrayList<>();
            ArrayList<Table> tables = (ArrayList<Table>) result.getBody();
            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Tierra tierra = new Tierra();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "tierraID":
                            tierra.setId((Integer) col.getValue());
                            break;
                        case "nombre":
                            tierra.setNombre((String) col.getValue());
                            break;
                        case "precioSugerido":
                            tierra.setPrecioSuger((double) col.getValue());
                            break;
                        case "maxYacimientos":
                            tierra.setCantidadMaxYacimientos((int) col.getValue());
                            break;
                        case "impuesto":
                            tierra.setImpuesto((double) col.getValue());
                            break;
                        case "estadoTierraID":
                            tierra.setEstado(Estado.values()[(int) col.getValue() - 1]);
                            break;
                        case "tipoTierraID":
                            tierra.setTipo(Tipos.values()[(int) col.getValue() - 1]);
                            break;
                        case "elementoID":
                            Elemento elemento = new Elemento();
                            elemento.setId((int) col.getValue());
                            tierra.setElementoPrincipal(elemento);
                            break;
                        default:
                            break;
                    }
                }
                tierras.add(tierra);
            }
            res.setOk(true);
            res.setBody(tierras);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("verTodasLasTierras" + e.getMessage());
            return res;
        }
    }

    public Response registarTierras(Tierra tierra, boolean hasElement) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB
                    , "registroDeTierras",
                    tierra.getNombre(),
                    tierra.getPrecioSuger(),
                    tierra.getTipo().ordinal() + 1,
                    hasElement ? 1 : 0
            );
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(tierra);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("registarTierras" + e.getMessage());
            return res;
        }
    }

    public Response comprarTierras(int tierraID, int alquimistaID, double gasto) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB,
                    "comprarTierras",
                    tierraID,
                    alquimistaID,
                    gasto
            );
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(gasto);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("comprarTierras" + e.getMessage());
            return res;
        }
    }
}
