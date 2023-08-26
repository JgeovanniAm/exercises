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
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Estado;
import jimmy.alvarez.bl.entities.tierra.Tipos;

import jimmy.alvarez.bl.logic.GestorAlquimista;
import jimmy.alvarez.bl.logic.GestorTierras;

import jimmy.alvarez.tl.utils.ControllerUtils;

import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class ComprarTierras {

    GestorTierras gestorTierras;
    private int selectedRowId;
    private boolean isSelectedRows = false;
    private Alquimista alquimista;

    private double selectedExpense;

    public ObservableList<jimmy.alvarez.bl.entities.tierra.Tierra> tierraArray;
    @FXML
    TableView<jimmy.alvarez.bl.entities.tierra.Tierra> TableTierra;
    @FXML
    private TableColumn<jimmy.alvarez.bl.entities.tierra.Tierra, Integer> id;
    @FXML
    private TableColumn<jimmy.alvarez.bl.entities.tierra.Tierra, String> name;
    @FXML
    private TableColumn<jimmy.alvarez.bl.entities.tierra.Tierra, String> price;
    @FXML
    private TableColumn<jimmy.alvarez.bl.entities.tierra.Tierra, String> max;
    @FXML
    private TableColumn<jimmy.alvarez.bl.entities.tierra.Tierra, String> type;
    @FXML
    private TableColumn<jimmy.alvarez.bl.entities.tierra.Tierra, String> estado;

    @FXML
    private Button buy;

    public void initialize(){
        try {
            gestorTierras = new GestorTierras();
            getListTierras();
            addEventListenerColumns();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            ControllerUtils.showAlert(Alert.AlertType.ERROR, "Errror", "Porfavor intente de nuevo");
        }
    }

    public void getListTierras() throws Exception {
        Response response =  gestorTierras.verTodasLasTierras();
        if(!response.isOk()){
            throw new Exception(response.getError());
        }
        ArrayList<jimmy.alvarez.bl.entities.tierra.Tierra> tierras = (ArrayList<jimmy.alvarez.bl.entities.tierra.Tierra>) response.getBody();
        printListTierras(tierras);
    }



    private void printListTierras(ArrayList<jimmy.alvarez.bl.entities.tierra.Tierra> tierras) {
        tierraArray = FXCollections.observableArrayList();

        for (jimmy.alvarez.bl.entities.tierra.Tierra item : tierras) {
            if(item.getEstado().equals(Estado.DISPONIBLE)){
                tierraArray.add(item);
            }
        }

        id.setCellValueFactory(new PropertyValueFactory<>("id"));
        name.setCellValueFactory(new PropertyValueFactory<>("nombre"));
        price.setCellValueFactory(new PropertyValueFactory<>("precioFinal"));
        max.setCellValueFactory(new PropertyValueFactory<>("cantidadMaxYacimientos"));

        Callback<TableColumn.CellDataFeatures<jimmy.alvarez.bl.entities.tierra.Tierra, String>, ObservableValue<String>> typeCol;
        typeCol = cellDataFeatures -> {
            Tipos tierra = cellDataFeatures.getValue().getTipo();
            String result = tierra.toString();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        type.setCellValueFactory(typeCol);

        Callback<TableColumn.CellDataFeatures<jimmy.alvarez.bl.entities.tierra.Tierra, String>, ObservableValue<String>> estadoCol;
        estadoCol = cellDataFeatures -> {
            Estado tierra = cellDataFeatures.getValue().getEstado();
            String result = tierra.toString();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };
        estado.setCellValueFactory(estadoCol);

        if (TableTierra != null) TableTierra.setItems(tierraArray);

    }

    private void addEventListenerColumns() {
        TableTierra.setOnMouseClicked(event -> {
            boolean isClicked = TableTierra.getSelectionModel().getSelectedItem() != null;
            showHideConfiguration(true);
            if (isClicked) {
                isSelectedRows = true;
                selectedRowId = TableTierra.getSelectionModel().getSelectedItem().getId();
                selectedExpense = TableTierra.getSelectionModel().getSelectedItem().getPrecioFinal();
            }
        });
    }

    public void buyOne() {
        try {
            gestorTierras = new GestorTierras();
            Response response =  gestorTierras.comprarTierras(selectedRowId, alquimista.getId(), selectedExpense);
            if(!response.isOk()){
                throw new Exception(response.getError());
            }
            getListTierras();
        } catch (Exception e) {
            e.printStackTrace();
            ControllerUtils.showAlert(Alert.AlertType.ERROR, "Errror", "Porfavor intente de nuevo");
        }

    }
    private void showHideConfiguration(boolean state) {
        buy.setDisable(!state);
    }

    public void goToMain(ActionEvent event) {
        try {
            GestorAlquimista gestorAlquimista = new GestorAlquimista();
            Response response = gestorAlquimista.verAlquimista(alquimista);
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            ArrayList<Alquimista> resAlquimista = (ArrayList<Alquimista>) response.getBody();
            FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/Home.fxml"));
            Parent root = loader.load();
            Home home = loader.getController();
            home.buildProfile(resAlquimista.get(0));
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }


    public Alquimista getAlquimista() {
        return alquimista;
    }

    public void setAlquimista(Alquimista alquimista) {
        this.alquimista = alquimista;
    }
}
