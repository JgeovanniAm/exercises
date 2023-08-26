package jimmy.alvarez.dl;

import com.microsoft.sqlserver.jdbc.SQLServerException;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tablesSchema.RegistryTable;
import jimmy.alvarez.bl.entities.tablesSchema.Table;

import java.sql.*;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
abstract public class AbstractDAO<T> {
    protected ConnectionDB connectioDB;

    abstract Response registrar(T object);

    abstract Response update(int id, T object);

    abstract Response delete(int id);

    abstract Response getAll();

    abstract void find(int id);

    /**
     * This methods ia generic method to use in anywhere
     * @param viewName this parameter means, we will receive and run the SQL views
     * @return
     */
    protected Response executeViews(String viewName) {
        Response<ArrayList<Table>> response = new Response();
        try {
            ArrayList<Table> registers = new ArrayList<>();
            Connection dbConnection = connectioDB.connect();
            ResultSet rs = dbConnection.prepareStatement("SELECT * FROM " + viewName).executeQuery();
            ResultSetMetaData rsMetaData = rs.getMetaData();
            int count = rsMetaData.getColumnCount();

            while (rs.next()) {
                Table schemaTable = new Table();
                for (int i = 1; i <= count; i++) {
                    String columnName = rsMetaData.getColumnName(i);
                    String type = rsMetaData.getColumnTypeName(i);
                    RegistryTable registryColumn = new RegistryTable<>();
                    registryColumn.setColumn(columnName);
                    switch (type) {
                        case "int":
                            registryColumn.setValue(rs.getInt(columnName));
                            break;
                        case "decimal":
                            registryColumn.setValue(rs.getDouble(columnName));
                            break;
                        case "varchar":
                            registryColumn.setValue(rs.getString(columnName));
                            break;
                        case "bit":
                            registryColumn.setValue(rs.getByte(columnName));
                            break;
                        case "date":
                            registryColumn.setValue(rs.getDate(columnName).toLocalDate());
                            break;
                        case "datetime":
                            registryColumn.setValue(rs.getDate(columnName).toLocalDate());
                            break;
                        default:
                            break;
                    }
                    schemaTable.addColumn(registryColumn);
                }
                registers.add(schemaTable);
            }
            response.setOk(true);
            response.setBody(registers);
            return response;
        } catch (SQLServerException e) {
            System.out.println(e);
            response.setOk(false);
            response.setError("SQLServerException Hay un error que ha ocurrido desde el DAO execute view" + e.getMessage());
            return response;
        } catch (SQLException e) {
            System.out.println(e);
            response.setOk(false);
            response.setError("SQLException Hay un error que ha ocurrido desde el DAO execute view" + e.getMessage());
            return response;
        } catch (Exception e) {
            System.out.println(e);
            response.setOk(false);
            response.setError("Exception Hay un error que ha ocurrido desde el DAO execute view" + e.getMessage());
            return response;
        }
    }

    /**
     *
     * @param storeProcedure the name of our store procedure which is located in SQL server
     * @param params all the params with all the store procedure params
     * @return
     */
    protected Response executeProcedure(String storeProcedure, Object... params) {
        Response response = new Response();
        try {
            Connection dbConnection = connectioDB.connect();
            String columns = "?,";
            columns = columns.repeat(params.length);
            columns = columns.substring(0, columns.length() - 1);
            PreparedStatement pstmt = dbConnection.prepareStatement("{call " + storeProcedure + "(" + columns + ")}");

            for (int i = 0; i < params.length; i++) {
                switch (params[i].getClass().getSimpleName()) {
                    case "Integer":
                        pstmt.setInt(i + 1, (int) params[i]);
                        break;
                    case "Double":
                        pstmt.setDouble(i + 1, (double) params[i]);
                        break;
                    case "String":
                        pstmt.setString(i + 1, params[i].toString());
                        break;
                    default:
                        break;
                }
            }
            pstmt.execute();
            response.setOk(true);
            response.setBody(params);
            return response;
        } catch (SQLServerException e) {
            System.out.println(e);
            response.setOk(false);
            response.setError("SQLServerException Hay un error que ha ocurrido desde el DAO execute view" + e.getMessage());
            return response;
        } catch (SQLException e) {
            System.out.println(e);
            response.setOk(false);
            response.setError("SQLException Hay un error que ha ocurrido desde el DAO execute view" + e.getMessage());
            return response;
        } catch (Exception e) {
            System.out.println(e);
            response.setOk(false);
            response.setError("Exception Hay un error que ha ocurrido desde el DAO execute view" + e.getMessage());
            return response;
        }
    }

}
