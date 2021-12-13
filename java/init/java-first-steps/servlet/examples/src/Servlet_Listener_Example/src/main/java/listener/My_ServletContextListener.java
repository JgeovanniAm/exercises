package listener;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public final class My_ServletContextListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent event) {

		ServletContext context = event.getServletContext();
        context.log("-- My_ServletContextListener.contextInitialized()");

    }

	@Override
    public void contextDestroyed(ServletContextEvent event) {

		ServletContext context = event.getServletContext();
        context.log("-- My_ServletContextListener.contextDestroyed()");

    }

}
