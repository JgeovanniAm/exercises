package jimmy.alvarez.dl;

import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.bl.entities.yacimiento.Ubicacion;
import jimmy.alvarez.bl.entities.yacimiento.Yacimientos;

import java.time.LocalDate;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class YacimientoDAO {
    protected ConnectionDB connectioDB;

    public YacimientoDAO(ConnectionDB connectioDB) {
        this.connectioDB = connectioDB;
    }

    public Response verYacimientosTierra(int idTierra) {
        Response res = new Response();
        try {
            String query = "SELECT * FROM visualizarYacimientosTierras(?)";
            Response result = UtilDAO.executeQueries(connectioDB, query, idTierra);

            if (!result.isOk()) {
                throw new Exception(result.getError());
            }

            ArrayList<Yacimientos> yacimientos = new ArrayList<>();
            ArrayList<Table> tables = (ArrayList<Table>) result.getBody();

            for (Table table : tables) {
                ArrayList<RegistryTable> columns = table.columns;
                Yacimientos yacimiento = new Yacimientos();
                Elemento elemento = new Elemento();
                for (RegistryTable col : columns) {
                    switch (col.getColumn()) {
                        case "yacimientoID":
                            yacimiento.setId((Integer) col.getValue());
                            break;
                        case "maxTiempoRecoleccion":
                            yacimiento.setMaxTiempoRecoleccion((double) col.getValue());
                            break;
                        case "horaRecoleccion":
                            yacimiento.setHoraRecoleccion((LocalDate) col.getValue());
                            break;
                        case "ubicacion":
                            if (col.getValue().toString().toLowerCase().equals("este")) {
                                yacimiento.setUBICACION(Ubicacion.ESTE);
                            } else if (col.getValue().toString().toLowerCase().equals("oeste")) {
                                yacimiento.setUBICACION(Ubicacion.OESTE);
                            } else if (col.getValue().toString().toLowerCase().equals("sur")) {
                                yacimiento.setUBICACION(Ubicacion.SUR);
                            } else {
                                yacimiento.setUBICACION(Ubicacion.NORTE);
                            }
                            break;
                        case "fechaCreacion":
                            yacimiento.setFecha((LocalDate) col.getValue());
                            break;
                        case "unidadesDisponibles":
                            yacimiento.setUnidadesDispo((int) col.getValue());
                            break;
                        case "color":
                            elemento.setColor((String) col.getValue());
                            break;
                        case "elementoID":
                            elemento.setId((int) col.getValue());
                            break;
                        case "colorHex":
                            elemento.setColorHex((String) col.getValue());
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
                    yacimiento.setElementoPrincipal(elemento);
                }
                yacimientos.add(yacimiento);
            }
            res.setOk(true);
            res.setBody(yacimientos);
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("verYacimientosTierra" + e.getMessage());
            return res;
        }
    }

    public Response crearYacimientos(Tierra tierra) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB,
                    "creacionYacimientos",
                    tierra.getId()
            );
            if (!result.isOk()) {
                throw new Exception(result.getError());
            }
            res.setOk(true);
            res.setBody(tierra.getId());
            return res;
        } catch (Exception e) {
            res.setOk(false);
            res.setError("crearYacimientos" + e.getMessage());
            return res;
        }
    }

    public Response recogerElemento(double cantidad, int yacimientoID, int tierraID, int alquimistaID) {
        Response res = new Response();
        try {
            Response result = UtilDAO.executeProcedure(
                    connectioDB,
                    "recogerElemento",
                    cantidad,
                    yacimientoID,
                    tierraID,
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
            res.setError("recogerElemento" + e.getMessage());
            return res;
        }
    }
}
