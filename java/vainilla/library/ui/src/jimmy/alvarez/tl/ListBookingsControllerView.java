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
import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.reserva.EstadoReserva;
import jimmy.alvarez.bl.entities.reserva.Reserva;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorReserva;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class ListBookingsControllerView extends Controller {

    GestorReserva gestorReserva;
    public ObservableList<Reserva> reservas;
    @FXML
    TableView<Reserva> TableReservas;
    @FXML
    private TableColumn<Reserva, Integer> id;
    @FXML
    private TableColumn<Reserva, String> idInventario;
    @FXML
    private TableColumn<Reserva, String> libro;
    @FXML
    private TableColumn<Reserva, String> fechaRealizacion;
    @FXML
    private TableColumn<Reserva, String> idMiembro;
    @FXML
    private TableColumn<Reserva, String> miembro;
    @FXML
    private TableColumn<Reserva, String> estado;

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

    @Override
    void initialize() {
        try {
            gestorReserva = new GestorReserva();
            addListReservas();
            addEventListenerColumns();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror en conexcion con la base de datos!", "Porfavor intente de nuevo");
        }
    }

    private void addListReservas() throws Exception {
        Response response = gestorReserva.getAll();
        ArrayList<Reserva> reservaResponse = (ArrayList<Reserva>) response.getBody();
        if (!response.isOk()) {
            throw new Exception(response.getError());
        }
        this.printListReservas(reservaResponse);
    }


    /**
     * This Method allows to add event listenner of type onclick to know which rows the user is selecting
     */
    private void addEventListenerColumns() {
        TableReservas.setOnMouseClicked(event -> {
            boolean isClicked = TableReservas.getSelectionModel().getSelectedItem() != null;
            showHideConfiguration(true);
            if (isClicked) {
                isSelectedRows = true;
                selectedRowId = TableReservas.getSelectionModel().getSelectedItem().getId();
            }
        });
    }

    private void showHideConfiguration(boolean state) {
        delete.setDisable(!state);
        update.setDisable(!state);
    }

    public void deleteReserva(ActionEvent event) {
        try {
            Response response = gestorReserva.delete(selectedRowId);
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            showAlert(Alert.AlertType.INFORMATION, "Exito!!", "se elimino correctamente");
            addListReservas();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror ha pasado al eliminar una reserva!", e.getMessage());
        }
    }


    /**
     * This method renders all the list of bookings available in database
     * @param reservaResponse
     */
    private void printListReservas(ArrayList<Reserva> reservaResponse) {
        reservas = FXCollections.observableArrayList();

        for (Reserva item : reservaResponse) {
            reservas.add(item);
        }

        if (id != null) id.setCellValueFactory(new PropertyValueFactory<>("id"));

        Callback<TableColumn.CellDataFeatures<Reserva, String>, ObservableValue<String>> idInventarioCol;
        idInventarioCol = cellDataFeatures -> {
            Inventario inventario = cellDataFeatures.getValue().getInventario();
            String id = inventario.getId() + "";
            ObservableValue<String> value = new SimpleStringProperty(id);
            return value;
        };

        idInventario.setCellValueFactory(idInventarioCol);

        Callback<TableColumn.CellDataFeatures<Reserva, String>, ObservableValue<String>> libroCol;
        libroCol = cellDataFeatures -> {
            Libro libro = cellDataFeatures.getValue().getInventario().getLibro();
            String titulo = libro.getTitulo();
            ObservableValue<String> value = new SimpleStringProperty(titulo);
            return value;
        };

        libro.setCellValueFactory(libroCol);

        Callback<TableColumn.CellDataFeatures<Reserva, String>, ObservableValue<String>> col;
        col = cellDataFeatures -> {
            Reserva reserva = cellDataFeatures.getValue();
            System.out.println(reserva);
            LocalDate date =  reserva.getFechaRealizacion();
            System.out.println(date);
            ObservableValue<String> value = new SimpleStringProperty(date.toString());
            return value;
        };

        fechaRealizacion.setCellValueFactory(col);

        Callback<TableColumn.CellDataFeatures<Reserva, String>, ObservableValue<String>> idMemberCol;
        idMemberCol = cellDataFeatures -> {
            Miembro miembro = cellDataFeatures.getValue().getMiembro();
            String id = miembro.getId() + "";
            ObservableValue<String> value = new SimpleStringProperty(id);
            return value;
        };

        idMiembro.setCellValueFactory(idMemberCol);

        Callback<TableColumn.CellDataFeatures<Reserva, String>, ObservableValue<String>> miembroCol;
        miembroCol = cellDataFeatures -> {
            Miembro miembro = cellDataFeatures.getValue().getMiembro();
            String result = miembro.getNombre();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        miembro.setCellValueFactory(miembroCol);

        Callback<TableColumn.CellDataFeatures<Reserva, String>, ObservableValue<String>> estadoCol;
        estadoCol = cellDataFeatures -> {
            EstadoReserva estado = cellDataFeatures.getValue().getEstado();
            String result = estado.toString();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        estado.setCellValueFactory(estadoCol);

        if (TableReservas != null) TableReservas.setItems(reservas);

    }

    public void updateBookingsView(ActionEvent event) throws IOException {
        if(isSelectedRows){
            FXMLLoader loader= new FXMLLoader(getClass().getResource("../ui/UpdateBookings.fxml"));
            Parent root = loader.load();
            UpdateBookingsControllerView updateBookingsControllerView = loader.getController();
            updateBookingsControllerView.setIdBookingToBeUpdated(selectedRowId);
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();
        }
    }

}
