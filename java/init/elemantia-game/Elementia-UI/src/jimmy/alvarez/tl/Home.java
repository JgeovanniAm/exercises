package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import jimmy.alvarez.bl.entities.alquimista.Alquimista;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.entities.tierra.Tierra;
import jimmy.alvarez.bl.entities.yacimiento.Yacimientos;
import jimmy.alvarez.bl.logic.GestorTierras;
import jimmy.alvarez.bl.logic.GestorYacimiento;
import jimmy.alvarez.tl.utils.ControllerUtils;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class Home {
    GestorTierras gestorTierras;

    GestorYacimiento gestorYacimiento;

    private Alquimista alquimista;

    ArrayList<Tierra>  tierras;

    @FXML
    public Text name;
    @FXML
    public Text element;

    @FXML
    public Text money;

    @FXML
    public AnchorPane panelHome;


    public void initialize(){
    }
    public void goToMain(ActionEvent event) {
        try {
            ControllerUtils.switchViews(FXMLLoader.load(getClass().getResource("../ui/Main.fxml")), event);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public void getAllGrounds(){
        try {
            gestorTierras = new GestorTierras();
            Response response = gestorTierras.verTierrasAlquimista(alquimista.getId());
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            tierras = (ArrayList<Tierra>) response.getBody();
            insertImagesGrounds();
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }

    }

    public void insertImagesGrounds(){
        ArrayList<InputStream> images = new ArrayList<>();
        images.add(getClass().getResourceAsStream("../assets/main/si.png"));
        images.add(getClass().getResourceAsStream("../assets/main/sp.png"));
        images.add(getClass().getResourceAsStream("../assets/main/sc.png"));
        images.add(getClass().getResourceAsStream("../assets/main/sh.png"));
        images.add(getClass().getResourceAsStream("../assets/main/sm.png"));
        images.add(getClass().getResourceAsStream("../assets/main/sz.png"));

        double num = 30;
        double hei = 120;

        for (int i = 0; i < tierras.size() ; i++) {
            ImageView imageView = new ImageView(new Image(images.get(i)));
            panelHome.getChildren().add(imageView );
            ImageView app = (ImageView) (Node) panelHome.getChildren().get(i);
            app.setId(String.valueOf(i+1));
            app.setX(num);
            app.setY(hei);
            num += 240;
            app.setOnMouseClicked( event-> {
                handleClickImages(app, event);
            });
        }
    }

    private void handleClickImages(ImageView app, javafx.scene.input.MouseEvent event){
        try {
            int position = Integer.parseInt(app.getId());
            Tierra tierra = tierras.get(position -1);
            gestorYacimiento = new GestorYacimiento();
            Response response = gestorYacimiento.verYacimientosTierra(tierra.getId());
            if (!response.isOk()) {
                throw new Exception(response.getError());
            }
            goToGroundView((ArrayList<Yacimientos>) response.getBody(), tierra, event);
        } catch (Exception e) {
            ControllerUtils.showAlert(Alert.AlertType.WARNING, "Oops!", e.getMessage());
        }
    }

    private  void goToGroundView(ArrayList<Yacimientos> yacimientos, Tierra tierra, MouseEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/Tierra.fxml"));
        Parent root = loader.load();
        jimmy.alvarez.tl.Tierra tierraController = loader.getController();

        tierraController.buildInfoGround(yacimientos, tierra, this.alquimista);

        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setScene(new Scene(root));
        stage.show();
    }

    public void goToBuyGrounds(MouseEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/ComprarTierras.fxml"));
        Parent root = loader.load();
        ComprarTierras comprarTierras = loader.getController();
        comprarTierras.setAlquimista(alquimista);
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setScene(new Scene(root));
        stage.show();
    }
    public void gotToTopPLayers(MouseEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/Top.fxml"));
        Parent root = loader.load();
        Top top = loader.getController();
        top.setAlquimista(alquimista);
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setScene(new Scene(root));
        stage.show();
    }

    public void goToCollectedElements(MouseEvent event) throws IOException {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("../ui/VenderElementos.fxml"));
        Parent root = loader.load();
        VenderElementos venderElementos = loader.getController();
        venderElementos.loadElementosRecollected(alquimista);
        Node node = (Node) event.getSource();
        Stage stage = (Stage) node.getScene().getWindow();
        stage.setScene(new Scene(root));
        stage.show();
    }

    public void buildProfile(Alquimista alquimista){
        this.alquimista = alquimista;
        name.setText(name.getText() + " " + alquimista.getNombre());
        element.setText(element.getText() + " " + alquimista.getElementoPrincipal().getNombre());
        money.setText(money.getText() + " " + alquimista.getRiqueza());
        getAllGrounds();
    }

    public Alquimista getAlquimista() {
        return alquimista;
    }

    public void setAlquimista(Alquimista alquimista) {
        this.alquimista = alquimista;
    }
}
