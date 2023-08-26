package jimmy.alvarez.dl;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

/**
 * @author j.alvarez.mendoza
 * @date 18/8/23
 */
public class ConnectionDB {

    private static ConnectionDB single_instance = null;

    public ConnectionDB() {
    }

    public static synchronized ConnectionDB getInstance() {
        if (single_instance == null) {
            single_instance = new ConnectionDB();
        }
        return single_instance;
    }

    /**
     * create connection DB for SQL server driver
     * @return
     */
    public Connection connect() {
        Properties properties = new Properties();
        FileInputStream fileInputStream = null;
        try {
            fileInputStream = new FileInputStream("/Users/j.alvarez.mendoza/Desktop/jimmy/cenfotec/POO/poo-proyecto/Elementia/src/jimmy/alvarez/dl/config.properties");
            properties.load(fileInputStream);
            Class.forName(properties.getProperty("claseJDBC"));
            String strConexion = properties.getProperty("stringConexion");
            return DriverManager.getConnection(strConexion);
        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return null;
    }
}
