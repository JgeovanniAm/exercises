package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.elemento.Elemento;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorElementos;
import jimmy.alvarez.tl.utils.ControllerUtils;


public class CreateElemento {

    GestorElementos gestorElementos;

    private Alquimista alquimista;

    @FXML
    public TextField name;
    @FXML
    public TextField symbol;
    @FXML
    public TextField color;
    @FXML
    public TextField atomNumber;
    @FXML
    public TextField colorhex;
    @FXML
    public TextField price;
    public Button submit;
    public void initialize() {
        gestorElementos = new GestorElementos();
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

    public void createE(ActionEvent event){
        try {
            Elemento elemento = createElement();
            Response response = gestorElementos.registarElementos(elemento);
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            ControllerUtils.showAlert(Alert.AlertType.CONFIRMATION, "Nice!!!", "Elemente has registered");
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }
        finally {
            name.clear();
            symbol.clear();
            colorhex.clear();
            color.clear();
            atomNumber.clear();
            price.clear();
        }
    }

    public Elemento createElement() throws Exception {
        if(name.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(symbol.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(color.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(Integer.parseInt(atomNumber.getText()) <= 0){
            throw new Exception("Incorrect format atomic number");
        }
        if(colorhex.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(Double.parseDouble(price.getText()) <= 0 ){
            throw new Exception("Incorrect format atomic number, empty or isn't an number");
        }
        Elemento elemento = new Elemento();
        elemento.setNombre(name.getText());
        elemento.setSimbolo(symbol.getText());
        elemento.setColor(color.getText());
        elemento.setNumAtom(Integer.parseInt(atomNumber.getText()));
        elemento.setColorHex(colorhex.getText());
        elemento.setPrecioSuger(Double.parseDouble(price.getText()));
        return elemento;
    }

    public Alquimista getAlquimista() {
        return alquimista;
    }

    public void setAlquimista(Alquimista alquimista) {
        this.alquimista = alquimista;
    }
}
