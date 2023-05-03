package egovframework.ojm.interceptor;

import javax.jms.Session;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class miniInterceptor extends HandlerInterceptorAdapter {
	
	private String[] blackList = {"/ojmMain.do","/ojmMakeVote.do","/ojmLastVote.do", "/ojmDoVote.do"};
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
			
		System.out.println("인터셉터 들어옴");
		
		String path = request.getServletPath();
		for(String url : blackList) {
			if(path.contentEquals(url)) {
				HttpSession session = request.getSession();
				if(session.getAttribute("user_id")==null) {
					System.out.println("\r\n\r\n\r\n\r\n==========================");
					System.out.println("세션 널값");
					System.out.println("==========================\r\n\r\n\r\n\r\n");
					response.sendRedirect("/ojmLogin.do");
					
					return false;
				}else {
					System.out.println("\r\n\r\n\r\n\r\n==========================");
					System.out.println("세션 값 있음");
					System.out.println("==========================\r\n\r\n\r\n\r\n");
					
					return true;
				}
			}
			
		}
		return true;
		
		
		
		
		
	}
}
