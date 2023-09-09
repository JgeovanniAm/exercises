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
import jimmy.alvarez.bl.entities.alquimista.Tipos;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorAlquimista;
import jimmy.alvarez.tl.utils.ControllerUtils;

import java.util.ArrayList;


public class SignIn {
    @FXML
    public TextField email;
    @FXML
    public TextField password;
    @FXML
    public Button submit;

    GestorAlquimista gestorAlquimista;

    public void initialize() {
        gestorAlquimista = new GestorAlquimista();
    }

    public void accessUser(ActionEvent event) {
        try {
            Alquimista alquimista = createAlquimista();
            Response response = gestorAlquimista.iniciarSession(alquimista);
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            goToHomeView(alquimista, event);
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }
    }

    public void goToHomeView(Alquimista alquimista, ActionEvent event) {
        try {
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
        } catch (Exception e) {
            System.out.println(e.getMessage());
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }
    }

    public Alquimista createAlquimista() throws Exception {
        if (email.getText().equals("")) {
            throw new Exception("Empty field, please fill it out");
        }
        if (password.getText().equals("")) {
            throw new Exception("Incorrect format password");
        }
        Alquimista alquimista = new Alquimista();
        alquimista.setCorreo(email.getText());
        alquimista.setContrasena(password.getText());
        return alquimista;
    }

    public void goToMain(ActionEvent event) {
        try {
            ControllerUtils.switchViews(FXMLLoader.load(getClass().getResource("../ui/Main.fxml")), event);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
