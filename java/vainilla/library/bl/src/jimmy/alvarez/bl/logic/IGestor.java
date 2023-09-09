package jimmy.alvarez.bl.logic;

import jimmy.alvarez.bl.entities.response.Response;

import java.sql.SQLException;

public interface IGestor<T> {
    Response registrar(T object) throws SQLException;

    Response update(int id, T object);

    Response getAll();

    Response delete(int id);

    Response find(int id);
}
