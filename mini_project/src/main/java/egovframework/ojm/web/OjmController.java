package egovframework.ojm.web;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;



import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import egovframework.ojm.service.*;

@Controller
public class OjmController {

	@Resource(name = "OjmService")
	private OjmService OjmService;
	
	
	@RequestMapping(value = "/ojmLogin.do")
	public String ojmLogin(HttpServletRequest request, HttpServletResponse response) throws Exception{
		return "ojm/ojmLogin";
	}

	
	
}
