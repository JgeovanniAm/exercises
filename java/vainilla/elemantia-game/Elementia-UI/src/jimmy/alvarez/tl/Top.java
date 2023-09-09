package jimmy.alvarez.tl;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;

import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;

import jimmy.alvarez.bl.logic.GestorAlquimista;

import jimmy.alvarez.tl.utils.ControllerUtils;

import java.util.ArrayList;

public class Top {
    private GestorAlquimista gestorAlquimista;

    private Alquimista alquimista;

    public ObservableList<Alquimista> alquimistaArray;
    @FXML
    TableView<Alquimista> topTable;
    @FXML
    private TableColumn<Alquimista, Integer> id;
    @FXML
    private TableColumn<Alquimista, String> name;
    @FXML
    private TableColumn<Alquimista, String> email;
    @FXML
    private TableColumn<Alquimista, String> money;
    @FXML
    private TableColumn<Alquimista, String> age;

    public void initialize(){
        this.gestorAlquimista = new GestorAlquimista();
        loadTopAlquimista();
    }
    public void goToMain(ActionEvent event) {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/Home.fxml"));
            Parent root = loader.load();
            Home home = loader.getController();
            home.buildProfile(alquimista);
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    private void loadTopAlquimista(){
        try {
            Response response = gestorAlquimista.verTopAlquimistas();
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            buildTopAlquimista((ArrayList<Alquimista>)response.getBody());
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }

    }

    private void buildTopAlquimista(ArrayList<Alquimista> alquimistas) {
        alquimistaArray = FXCollections.observableArrayList();

        for (Alquimista item : alquimistas) {
            alquimistaArray.add(item);
        }

        id.setCellValueFactory(new PropertyValueFactory<>("id"));
        name.setCellValueFactory(new PropertyValueFactory<>("nombre"));
        email.setCellValueFactory(new PropertyValueFactory<>("correo"));
        money.setCellValueFactory(new PropertyValueFactory<>("riqueza"));
        age.setCellValueFactory(new PropertyValueFactory<>("getEdad"));
        age.setCellValueFactory(new PropertyValueFactory<>("fechaNacimiento"));
        topTable.setItems(alquimistaArray);
    }

    public Alquimista getAlquimista() {
        return alquimista;
    }

    public void setAlquimista(Alquimista alquimista) {
        this.alquimista = alquimista;
    }
}
