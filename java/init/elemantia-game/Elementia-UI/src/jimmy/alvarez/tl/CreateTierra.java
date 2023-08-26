package jimmy.alvarez.tl;

import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.bl.entities.tierra.Tipos;
import jimmy.alvarez.bl.logic.GestorTierras;
import jimmy.alvarez.tl.utils.ControllerUtils;

public class CreateTierra {

    GestorTierras gestorTierras;

    Alquimista alquimista;

    @FXML
    public TextField name;
    @FXML
    public ComboBox type;
    @FXML
    public ComboBox has;
    @FXML
    public TextField price;
    @FXML
    public Button submit;
    public void initialize() {
        gestorTierras = new GestorTierras();
        type.setItems(FXCollections.observableArrayList("Normal", "Fertil", "Rara"));
        has.setItems(FXCollections.observableArrayList("Si", "No"));
    }

    public void goToHomeKing(ActionEvent event) {
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/HomeKing.fxml"));
            Parent root = loader.load();
            HomeKing home = loader.getController();
            home.buildProfile(alquimista);
            Node node = (Node) event.getSource();
            Stage stage = (Stage) node.getScene().getWindow();
            stage.setScene(new Scene(root));
            stage.show();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void createT(ActionEvent event){
        try {
            Tierra tierra = createTierra();
            Response response = gestorTierras.registarTierras(tierra, has.getValue() == "Si");
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            ControllerUtils.showAlert(Alert.AlertType.CONFIRMATION, "Nice!!!", "Elemente has registered");
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }
        finally {
            name.clear();
            type.setValue(null);
            has.setValue(null);
            price.clear();
        }
    }

    public Tierra createTierra() throws Exception {
        if(name.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(Double.parseDouble(price.getText()) <= 0 ){
            throw new Exception("Incorrect format atomic number, empty or isn't an number");
        }
        if(type.getValue() == null){
            throw new Exception("Empty field, please fill it out");
        }
        Tierra tierra = new Tierra();
        tierra.setNombre(name.getText());
        tierra.setPrecioSuger(Double.parseDouble(price.getText()));
        if(type.getValue().equals("Normal")){
            tierra.setTipo(Tipos.NORMAL);
        }else if(type.getValue().equals("Fertil")){
            tierra.setTipo(Tipos.FERTIL);
        }else {
            tierra.setTipo(Tipos.RARA);
        }
        return tierra;
    }

    public Alquimista getAlquimista() {
        return alquimista;
    }

    public void setAlquimista(Alquimista alquimista) {
        this.alquimista = alquimista;
    }
}
