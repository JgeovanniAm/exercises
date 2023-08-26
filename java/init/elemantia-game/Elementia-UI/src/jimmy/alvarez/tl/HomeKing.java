package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.tl.utils.ControllerUtils;


/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class HomeKing {

    @FXML
    public Text name;
    @FXML
    public Text element;

    @FXML
    public Text email;
    private Alquimista alquimista;

    public void initialize(){

    }
    public void goToMain(ActionEvent event) {
        try {
            ControllerUtils.switchViews(FXMLLoader.load(getClass().getResource("../ui/Main.fxml")), event);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void buildProfile(Alquimista alquimista){
        this.alquimista = alquimista;
        name.setText(name.getText() + " " + alquimista.getNombre());
        element.setText(element.getText() + " " + alquimista.getElementoPrincipal().getNombre());
        email.setText(email.getText() + " " + alquimista.getCorreo());
    }

    public void goToCreateE(ActionEvent event){
            try {
                FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/CreateElements.fxml"));
                Parent root = loader.load();
                CreateElemento ele = loader.getController();
                ele.setAlquimista(alquimista);
                Node node = (Node) event.getSource();
                Stage stage = (Stage) node.getScene().getWindow();
                stage.setScene(new Scene(root));
                stage.show();

            } catch (Exception e) {
                System.out.println(e.getMessage());
            }

    }

    public void goToCreateT(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/CreateTierra.fxml"));
            Parent root = loader.load();
            CreateTierra tierra = loader.getController();
            tierra.setAlquimista(alquimista);
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
