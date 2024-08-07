package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.alquimista.Tipos;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorAlquimista;
import jimmy.alvarez.tl.utils.ControllerUtils;

import java.util.ArrayList;

import static jimmy.alvarez.tl.utils.Utils.validadorContrasena;

public class SignUp {

    @FXML
    public TextField name;
    @FXML
    public TextField email;
    @FXML
    public DatePicker date;
    @FXML
    public TextField password;
    @FXML
    public TextField confirmPassword;

    public Button submit;

    GestorAlquimista gestorAlquimista;

    public  void initialize(){
        gestorAlquimista = new GestorAlquimista();
    }

    public void createNewUser(ActionEvent event){
        try{
            Alquimista alquimista = createAlquimista();
            Response response = gestorAlquimista.registrarNewSession(alquimista);
            if(!response.isOk()){
                throw new Exception(response.getError());
            }
            goToHomeView(alquimista, event);
        }catch (Exception e){
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!" , e.getMessage());
        }
    }


    public Alquimista createAlquimista() throws Exception {
        if(name.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(email.getText().equals("")){
            throw new Exception("Empty field, please fill it out");
        }
        if(date.getValue() == null){
            throw new Exception("Empty field, please fill it out");
        }
        if(!validadorContrasena(password.getText())){
            throw new Exception("Incorrect format password");
        }
        if(!confirmPassword.getText().equals(password.getText())){
            throw new Exception("Password is not matching");
        }
        Alquimista alquimista = new Alquimista();
        alquimista.setNombre(name.getText());
        alquimista.setCorreo(email.getText());
        alquimista.setFechaNacimiento(date.getValue());
        alquimista.setContrasena(password.getText());
        return alquimista;
    }

    public void goToMain(ActionEvent event) {
        try {
            ControllerUtils.switchViews(FXMLLoader.load(getClass().getResource("../ui/Main.fxml")), event);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void goToHomeView(Alquimista alquimista, ActionEvent event){
        try{
            Response response = gestorAlquimista.verAlquimista(alquimista);
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            ArrayList<Alquimista> resAlquimista = (ArrayList<Alquimista>) response.getBody();

            if (resAlquimista.get(0).getTipo().equals(Tipos.REY)) {
                FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/HomeKing.fxml"));
                Parent root = loader.load();
                HomeKing homeKing = loader.getController();

                homeKing.buildProfile(resAlquimista.get(0));

                Node node = (Node) event.getSource();
                Stage stage = (Stage) node.getScene().getWindow();
                stage.setScene(new Scene(root));
                stage.show();
            } else {
                FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/Home.fxml"));
                Parent root = loader.load();
                Home home = loader.getController();

                home.buildProfile(resAlquimista.get(0));

                Node node = (Node) event.getSource();
                Stage stage = (Stage) node.getScene().getWindow();
                stage.setScene(new Scene(root));
                stage.show();
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!" , e.getMessage());
        }
    }
}
