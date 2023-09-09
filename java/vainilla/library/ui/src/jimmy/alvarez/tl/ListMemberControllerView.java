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
import javafx.scene.control.*;

import javafx.scene.control.cell.PropertyValueFactory;

import javafx.stage.Stage;
import javafx.util.Callback;
import jimmy.alvarez.bl.entities.miembro.Miembro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorMiembro;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class ListMemberControllerView extends Controller {
    GestorMiembro gestorMiembro;
    public ObservableList<Miembro> miembros;
    @FXML
    TableView<Miembro> tableMember;
    @FXML
    private TableColumn<Miembro, Integer> id;
    @FXML
    private TableColumn<Miembro, String> nombre;
    @FXML
    private TableColumn<Miembro, String> contrasena;
    @FXML
    private TableColumn<Miembro, String> correo;
    @FXML
    private TableColumn<Miembro, String> fechaNacimiento;
    @FXML
    private TableColumn<Miembro, Integer> direccion;
    @FXML
    private TableColumn<Miembro, Integer> genero;
    @FXML
    private Button delete;
    @FXML
    private Button update;

    private int selectedRowId;

    private boolean isSelectedRows = false;

    /**
     * Method which handles the go back functionality
     * @param event Action button
     */
    public void homeLibraryView(ActionEvent event) {
        this.switchViews("../ui/Main.fxml", event);
    }

    @FXML
    public void initialize() {
        try {
            gestorMiembro = new GestorMiembro();
            addListMembers();
            addEventListenerColumns();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror en conexion con la base de datos!", "Porfavor intente de nuevo");
        }
    }

    private void addListMembers() throws Exception {
        Response response = gestorMiembro.getAll();
        ArrayList<Miembro> miembrosResponse = (ArrayList<Miembro>) response.getBody();
        if (!response.isOk()) {
            throw new Exception(response.getError());
        }
        this.printMembersList(miembrosResponse);
    }

    /**
     * This method renders all the list of bookings available in database
     * @param memberListResponse
     */
    private void printMembersList( ArrayList<Miembro>memberListResponse){
        miembros = FXCollections.observableArrayList();

        for (Miembro item : memberListResponse) {
            miembros.add(item);
        }

        id.setCellValueFactory(new PropertyValueFactory<>("id"));
        nombre.setCellValueFactory(new PropertyValueFactory<>("nombre"));
        contrasena.setCellValueFactory(new PropertyValueFactory<>("contrasena"));
        correo.setCellValueFactory(new PropertyValueFactory<>("correo"));
        correo.setCellValueFactory(new PropertyValueFactory<>("correo"));

        Callback<TableColumn.CellDataFeatures<Miembro, String>, ObservableValue<String>> col;
        col = cellDataFeatures -> {
            Miembro miembro = cellDataFeatures.getValue();
            LocalDate date =  miembro.getFechaNacimiento();
            ObservableValue<String> value = new SimpleStringProperty(date.toString());
            return value;
        };

        fechaNacimiento.setCellValueFactory(col);
        direccion.setCellValueFactory(new PropertyValueFactory<>("direccion"));
        genero.setCellValueFactory(new PropertyValueFactory<>("genero"));

        if (tableMember != null) tableMember.setItems(miembros);
    }

    /**
     * This Method allows to add event listenner of type onclick to know which rows the user is selecting
     */
    private void addEventListenerColumns(){
        tableMember.setOnMouseClicked(event -> {
            boolean isClicked = tableMember.getSelectionModel().getSelectedItem() != null;
            showHideConfiguration(true);
            if (isClicked) {
                isSelectedRows = true;
                selectedRowId = tableMember.getSelectionModel().getSelectedItem().getId();
            }
        });
    }

    private void showHideConfiguration(boolean state){
        delete.setDisable(!state);
        update.setDisable(!state);
    }

    public void deleteMember(ActionEvent event){
        try {
            Response response = gestorMiembro.delete(selectedRowId);
            if(!response.isOk()){
                throw new Exception(response.getError());
            }
            showAlert(Alert.AlertType.INFORMATION, "Exito!!", "se elimino correctamente");
            addListMembers();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Errror ha pasado al eliminar un miembro!", e.getMessage());
        }
    }

    public void updateMemberView(ActionEvent event) throws IOException {
        if(isSelectedRows){
            FXMLLoader loader= new FXMLLoader(getClass().getResource("../ui/UpdateMembers.fxml"));
            Parent root = loader.load();
            UpdateMemberControllerView updateMemberControllerView = loader.getController();
            updateMemberControllerView.setIdMiembroToBeUpdated(selectedRowId);
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();
        }
    }

}
