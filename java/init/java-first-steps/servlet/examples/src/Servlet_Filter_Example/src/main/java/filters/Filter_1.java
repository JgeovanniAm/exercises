package filters;  

import javax.servlet.http.HttpFilter;
import javax.servlet.FilterChain; 
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse; 

import javax.servlet.ServletException;  
import java.io.IOException;  

import java.io.PrintWriter;

public class Filter_1 extends HttpFilter {  

  	@Override
	public void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain)  
    throws IOException, ServletException {  
    
	    PrintWriter out = response.getWriter();
		
	    out.println("Filter 1-B");  
          
	    chain.doFilter(request, response);//call next resource  
          
	    out.println("Filter 1-A"); 
							
  }
}