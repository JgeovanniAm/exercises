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
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.alquimista.Tipos;
import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.elemento.ElementosRecolectados;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Estado;
import jimmy.alvarez.bl.logic.GestorAlquimista;
import jimmy.alvarez.bl.logic.GestorElementos;
import jimmy.alvarez.bl.logic.GestorTierras;
import jimmy.alvarez.tl.utils.ControllerUtils;

import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class VenderElementos {

    GestorElementos gestorElementos;

    private int selectedRowId;
    private boolean isSelectedRows = false;
    private Alquimista alquimista;

    private double selectedExpense;

    public ObservableList<ElementosRecolectados> ElementosArray;
    @FXML
    TableView<ElementosRecolectados> TableElememtos;
    @FXML
    private TableColumn<ElementosRecolectados, String> color;
    @FXML
    private TableColumn<ElementosRecolectados, String> name;
    @FXML
    private TableColumn<ElementosRecolectados, String> quantity;
    @FXML
    private TableColumn<ElementosRecolectados, String> symbol;

    @FXML
    private Button sell;

    @FXML
    public TextField quantityText;

    public void initialize(){
        try {
            gestorElementos = new GestorElementos();
        } catch (Exception e) {
            e.printStackTrace();
            ControllerUtils.showAlert(Alert.AlertType.ERROR, "Errror", "Porfavor intente de nuevo");
        }
    }

    public void loadElementosRecollected(Alquimista alquimista) {
        try {
            this.alquimista = alquimista;
            Response response =  gestorElementos.verElementosRecolectados(alquimista);
            if(!response.isOk()){
                throw new Exception(response.getError());
            }
            ArrayList<ElementosRecolectados> elementosRecolectados = (ArrayList<ElementosRecolectados>) response.getBody();
            printElementsRecollected(elementosRecolectados);
            addEventListenerColumns();
            showHideConfiguration(false);
        } catch (Exception e) {
            e.printStackTrace();
            ControllerUtils.showAlert(Alert.AlertType.ERROR, "Errror", "Porfavor intente de nuevo");
        }
    }



    private void printElementsRecollected(ArrayList<ElementosRecolectados> elementosRecolectadosList) {
        ElementosArray = FXCollections.observableArrayList();

        for (ElementosRecolectados item : elementosRecolectadosList) {
                ElementosArray.add(item);
        }

        quantity.setCellValueFactory(new PropertyValueFactory<>("cantidad"));


        Callback<TableColumn.CellDataFeatures<ElementosRecolectados, String>, ObservableValue<String>> nombreCol;
        nombreCol = cellDataFeatures -> {
            Elemento elemento = cellDataFeatures.getValue().getElemento();
            String result = elemento.getNombre();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        name.setCellValueFactory(nombreCol);

        Callback<TableColumn.CellDataFeatures<ElementosRecolectados, String>, ObservableValue<String>> colorCol;
        colorCol = cellDataFeatures -> {
            Elemento elemento = cellDataFeatures.getValue().getElemento();
            String result = elemento.getColor();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        color.setCellValueFactory(colorCol);

        Callback<TableColumn.CellDataFeatures<ElementosRecolectados, String>, ObservableValue<String>> symbolCol;
        symbolCol = cellDataFeatures -> {
            Elemento elemento = cellDataFeatures.getValue().getElemento();
            String result = elemento.getSimbolo();
            ObservableValue<String> value = new SimpleStringProperty(result);
            return value;
        };

        symbol.setCellValueFactory(symbolCol);

        TableElememtos.setItems(ElementosArray);
    }

    private void addEventListenerColumns() {
        TableElememtos.setOnMouseClicked(event -> {
            boolean isClicked = TableElememtos.getSelectionModel().getSelectedItem() != null;
            showHideConfiguration(true);
            if (isClicked) {
                isSelectedRows = true;
                selectedRowId = TableElememtos.getSelectionModel().getSelectedItem().getElemento().getId();
            }
        });
    }

    public void sellOne() {
        try {
            if(quantityText.getText().equals("")){
                throw  new Exception("Empty quantity text field");
            }
            if(Double.parseDouble(quantityText.getText()) < 0){
                throw  new Exception("Incorrect quantity text field format");
            }
            Response response =  gestorElementos.ventaDeElementos(selectedRowId, Double.parseDouble(quantityText.getText()), alquimista.getId());
            if(!response.isOk()){
                throw new Exception(response.getError());
            }
            loadElementosRecollected(alquimista);
        } catch (Exception e) {
            e.printStackTrace();
            ControllerUtils.showAlert(Alert.AlertType.ERROR, "Errror", e.getMessage());
        }

    }
    private void showHideConfiguration(boolean state) {
        sell.setDisable(!state);
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
