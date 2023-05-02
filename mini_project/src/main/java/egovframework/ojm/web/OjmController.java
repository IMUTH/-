package egovframework.ojm.web;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import egovframework.ojm.service.*;

@Controller
public class OjmController {

	@Resource(name = "OjmService")
	private OjmService OjmService;

	@RequestMapping(value = "/ojmLogin.do")
	public String ojmLogin(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return "ojm/ojmLogin";
	}

	@RequestMapping(value = "/ojmLoginAction.do")
	public String ojmLoginAction(HttpServletRequest request, LoginVO LoginVO, HttpServletResponse response)
			throws Exception {
		String user_id = request.getParameter("id");
		String password = request.getParameter("pw");
		LoginVO.setUser_id(user_id);
		LoginVO.setPassword(password);
		LoginVO loginvo = OjmService.loginAction(LoginVO);
		HttpSession session = request.getSession();
		System.out.println(loginvo.getUser_id());
		String result = loginvo.getUser_id();
		if ((result.isEmpty()) || (result == null)) {
			return "redirect:/ojmLogin.do";
		} else {
			session.setAttribute("user_id", result);
			return "redirect:/ojmMain.do";
		}
	}

	@RequestMapping(value = "/ojmMain.do")
	public String ojmMain(HttpServletRequest request, HttpServletResponse response, MainVO paramVO, Model model)
			throws Exception {
		List<MainVO> voteList = OjmService.getVoteList(paramVO);

		model.addAttribute("voteList", voteList);

		return "ojm/ojmMain";
	}

	@RequestMapping(value = "/ojmDoVote.do")
	public String ojmDoVote(HttpServletRequest request, HttpServletResponse response,VoteMenuVO MenuList, DoVoteVO DoVoteVO, Model model) throws Exception {
		DoVoteVO.setVote_seq(request.getParameter("vote_seq"));
		MenuList.setVote_seq(request.getParameter("vote_seq"));
		DoVoteVO = OjmService.doVoteList(DoVoteVO);
		List<VoteMenuVO> VoteMenu = OjmService.getMenuList(MenuList);
		model.addAttribute("DoVoteVO", DoVoteVO);
		model.addAttribute("VoteMenu", VoteMenu);
		return "ojm/ojmDoVote";
	}
	

}
