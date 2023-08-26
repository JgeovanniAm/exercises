package jimmy.alvarez.bl.entities.tablesSchema;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 * This class its purpose is to map all the structure of a SQL table with its own registers (columns and values)
 */
public class RegistryTable<T> {
    private String Column;
    private T value;

    public RegistryTable() {
    }

    public String getColumn() {
        return Column;
    }

    public void setColumn(String column) {
        Column = column;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "RegistryTable{" + "Column='" + Column + '\'' + ", value=" + value + '}';
    }
}
