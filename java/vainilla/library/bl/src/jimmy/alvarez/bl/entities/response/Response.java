package jimmy.alvarez.bl.entities.response;

/**
 * @author j.alvarez.mendoza
 * @date 11/8/23
 * This class its purpose is to handle a better and customized way the Responses wether
 * is a error or success output from the database
 */
public class Response<T> {

    private T body = null;
    private String error;

    private boolean ok = false;

    public Response() {
    }

    public T getBody() {
        return body;
    }

    public void setBody(T body) {
        this.body = body;
    }

    public boolean isOk() {
        return ok;
    }

    public void setOk(boolean ok) {
        this.ok = ok;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
