package jimmy.alvarez.dl;

import java.sql.SQLException;

public interface DLinterface<T> {
    Object registrar(T object) throws SQLException;

    void update(int id, T object);

    void delete(int id);

    void find(int id);
}
