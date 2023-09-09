package jimmy.alvarez.tl;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;
import jimmy.alvarez.bl.entities.inventario.Inventario;
import jimmy.alvarez.bl.entities.libro.Categoria;
import jimmy.alvarez.bl.entities.libro.Libro;
import jimmy.alvarez.bl.entities.response.Response;
import jimmy.alvarez.bl.logic.GestorInventario;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 */
public class UpdateBooksControllerView extends Controller {

    @FXML
    public TextField nombre;
    @FXML
    public TextField autor;
    @FXML
    public RadioButton fantasy, mistery, ya, children;
    @FXML
    public TextField ibsm;
    @FXML
    public TextField precio;
    @FXML
    public TextField cantidad;
    private int idInventarioToBeUpdated;

    public void homeLibraryView(ActionEvent event) {
        this.switchViews("../ui/Main.fxml", event);
    }

    @Override
    void initialize() {}

    public void updateBook() {
        System.out.println(getIdInventarioToBeUpdated());
        try {
            GestorInventario gestorInventario = new GestorInventario();
            Response responseFX = createInventarioBook();
            if (!responseFX.isOk()) {
                showAlert(Alert.AlertType.WARNING, "Ha ocurrido un Error", responseFX.getError());
                return;
            }
            Response responseGestor = gestorInventario.update(getIdInventarioToBeUpdated(), (Inventario) responseFX.getBody());

            if (!responseGestor.isOk()) {
                throw new Exception(responseGestor.getError());
            }
            showAlert(Alert.AlertType.INFORMATION, "Exito!!", "se actualizo correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            showAlert(Alert.AlertType.ERROR, "Error please review", e.getMessage());
        } finally {
            nombre.clear();
            autor.clear();
            fantasy.setSelected(false);
            mistery.setSelected(false);
            children.setSelected(false);
            ya.setSelected(false);
            ibsm.clear();
            precio.clear();
            cantidad.clear();
        }
    }

    public int getIdInventarioToBeUpdated() {
        return idInventarioToBeUpdated;
    }

    public void setIdInventarioToBeUpdated(int idInventarioToBeUpdated) {
        this.idInventarioToBeUpdated = idInventarioToBeUpdated;
    }

    private Response createInventarioBook() {
        Response response = new Response<>();
        Inventario inventario = new Inventario();
        Libro libro = new Libro();
        if (nombre.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de nombre");
            return response;
        }
        if (autor.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de autor");
            return response;
        }
        if (ibsm.getText().equals("")) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de ibsm");
            return response;
        }
        if (precio.getText().equals("") || Integer.parseInt(precio.getText()) < 0) {
            response.setOk(false);
            response.setError("Error porfavor llene el campo de numero o digte un numero correcto");
            return response;
        }
        libro.setTitulo(nombre.getText());
        libro.setAutor(autor.getText());
        libro.setIbsm(ibsm.getText());
        libro.setPrecio(Integer.parseInt(precio.getText()));
        if (fantasy.isSelected()) {
            libro.setCategoria(Categoria.FANTASIA);
        } else if (mistery.isSelected()) {
            libro.setCategoria(Categoria.MISTERIO);
        } else if (children.isSelected()) {
            libro.setCategoria(Categoria.INFANTIL);
        } else {
            libro.setCategoria(Categoria.YA);
        }
        inventario.setLibro(libro);
        inventario.setCantidad(Integer.parseInt(precio.getText()));
        response.setBody(inventario);
        response.setOk(true);
        return response;
    }
}
