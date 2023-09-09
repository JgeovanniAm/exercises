package jimmy.alvarez.bl.entities.tablesSchema;

import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 * This class its purpose is to map all the structure of a SQL table with its own registers (columns and values)
 */
public class Table<T> {

    public ArrayList<RegistryTable> columns = new ArrayList<>();

    public Table() {
    }

    public void addColumn(RegistryTable item) {
        columns.add(item);
    }

    public ArrayList<RegistryTable> getColumns() {
        return columns;
    }

    public void setColumns(ArrayList<RegistryTable> columns) {
        this.columns = columns;
    }

    @Override
    public String toString() {
        return "Table{" + "columns=" + columns + '}';
    }
}
