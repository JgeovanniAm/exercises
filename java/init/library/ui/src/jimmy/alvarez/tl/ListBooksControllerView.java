package jimmy.alvarez.tl;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;

import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;

import javafx.stage.Stage;
import javafx.util.Callback;
import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.libro.Libro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorInventario;

import java.io.IOException;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class ListBooksControllerView extends Controller{
    GestorInventario gestorInventario;

    public ObservableList<Inventario> inventarios;
    @FXML
    TableView<Inventario> tableBook;
    @FXML
    private TableColumn<Inventario, Integer> id;
    @FXML
    private TableColumn<Inventario, String> titulo;
    @FXML
    private TableColumn<Inventario, String> autor;
    @FXML
    private TableColumn<Inventario, String> isbm;
    @FXML
    private TableColumn<Inventario, String> precio;
    @FXML
    private TableColumn<Inventario, String> categoria;
    @FXML
    private TableColumn<Inventario, Integer> cantidad;

    @FXML
    private Button delete;
    @FXML
    private Button update;

    private int selectedRowId;

    private boolean isSelectedRows = false;

    /**
     * Method which handles the go back functionality
     *
     * @param event Action button
     */
    public void homeLibraryView(ActionEvent event) {
        this.switchViews("../ui/Main.fxml", event);
    }

    @FXML
    public void initialize() {
        try {
            this.gestorInventario = new GestorInventario();
            addListInventarioBook();
            addEventListenerColumns();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror en conexcion con la base de datos!", "Porfavor intente de nuevo");
        }
    }


    private void addListInventarioBook() throws Exception {
        Response response = gestorInventario.getAll();
        ArrayList<Inventario> inventarioResponse = (ArrayList<Inventario>) response.getBody();
        if (!response.isOk()) {
            throw new Exception(response.getError());
        }
        printListBooks(inventarioResponse);
    }


    /**
     * This method renders all the list of bookings available in database
     * @param invemtarioResponse
     */
    private void printListBooks(ArrayList<Inventario> invemtarioResponse) {
        inventarios = FXCollections.observableArrayList();

        for (Inventario item : invemtarioResponse) {
            inventarios.add(item);
        }

        if (id != null) id.setCellValueFactory(new PropertyValueFactory<>("id"));

        Callback<TableColumn.CellDataFeatures<Inventario, String>, ObservableValue<String>> titleCol;
        titleCol = cellDataFeatures -> {
            Libro libro = cellDataFeatures.getValue().getLibro();
            String title = libro.getTitulo();
            ObservableValue<String> value = new SimpleStringProperty(title);
            return value;
        };

        titulo.setCellValueFactory(titleCol);

        Callback<TableColumn.CellDataFeatures<Inventario, String>, ObservableValue<String>> autorCol;
        autorCol = cellDataFeatures -> {
            Libro libro = cellDataFeatures.getValue().getLibro();
            String autor = libro.getAutor();
            ObservableValue<String> value = new SimpleStringProperty(autor);
            return value;
        };

        autor.setCellValueFactory(autorCol);

        Callback<TableColumn.CellDataFeatures<Inventario, String>, ObservableValue<String>> isbmCol;
        isbmCol = cellDataFeatures -> {
            Libro libro = cellDataFeatures.getValue().getLibro();
            String result = libro.getIbsm();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        isbm.setCellValueFactory(isbmCol);

        Callback<TableColumn.CellDataFeatures<Inventario, String>, ObservableValue<String>> precioCol;
        precioCol = cellDataFeatures -> {
            Libro libro = cellDataFeatures.getValue().getLibro();
            String result = libro.getIbsm().toString();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        precio.setCellValueFactory(precioCol);

        Callback<TableColumn.CellDataFeatures<Inventario, String>, ObservableValue<String>> categoriaCol;
        categoriaCol = cellDataFeatures -> {
            Libro libro = cellDataFeatures.getValue().getLibro();
            String result = libro.getCategoria().toString();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        categoria.setCellValueFactory(categoriaCol);

        cantidad.setCellValueFactory(new PropertyValueFactory<>("cantidad"));

        if (tableBook != null) tableBook.setItems(inventarios);
    }

    /**
     * This Method allows to add event listenner of type onclick to know which rows the user is selecting
     */
    private void addEventListenerColumns(){
        tableBook.setOnMouseClicked(event -> {
            boolean isClicked = tableBook.getSelectionModel().getSelectedItem() != null;
            showHideConfiguration(true);
            if (isClicked) {
                isSelectedRows = true;
                selectedRowId = tableBook.getSelectionModel().getSelectedItem().getId();
            }
        });
    }

    private void showHideConfiguration(boolean state){
        delete.setDisable(!state);
        update.setDisable(!state);
    }

    public void deleteInventarioBook(ActionEvent event){
        try {
            Response response = gestorInventario.delete(selectedRowId);
            if(!response.isOk()){
                throw new Exception(response.getError());
            }
            showAlert(Alert.AlertType.INFORMATION, "Exito!!", "se elimino correctamente");
            addListInventarioBook();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror ha pasado al eliminar un inventario!", e.getMessage());
        }
    }

    public void updateBookView(ActionEvent event) throws IOException {
        if(isSelectedRows){
            FXMLLoader loader= new FXMLLoader(getClass().getResource("../ui/UpdateBooks.fxml"));
            Parent root = loader.load();
            UpdateBooksControllerView updateBooksControllerView = loader.getController();
            updateBooksControllerView.setIdInventarioToBeUpdated(selectedRowId);
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();
        }
    }
}
