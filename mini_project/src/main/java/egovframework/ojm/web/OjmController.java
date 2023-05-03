package egovframework.ojm.web;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServlet;
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

	@RequestMapping(value = "/ojmMakeVoteAction.do")
	public String ojmMakeVoteAction(HttpServletRequest request, HttpServletResponse response, VoteMakeVO VoteMakeVO, VoteMenuVO VoteMenuVO) throws Exception {
			System.out.println("컨트롤러 들어옴");
			HttpSession session = request.getSession();
			VoteMakeVO.setVote_nm(request.getParameter("vote_nm"));
			VoteMakeVO.setVote_cm(request.getParameter("vote_cm"));
			VoteMakeVO.setUser_id((String)session.getAttribute("user_id"));
			VoteMakeVO.setItems_num(request.getParameter("items_num"));
			System.out.println("값 담김");
			VoteMakeVO = OjmService.MakeVoteAction(VoteMakeVO);
			System.out.println("투표만들어짐");
			VoteMenuVO.setUser_id((String)session.getAttribute("user_id"));
			if(!request.getParameter("menu_nm1").isEmpty()) {
				VoteMenuVO.setMenu_nm(request.getParameter("menu_nm1"));
				VoteMenuVO.setMenu_cm(request.getParameter("menu_cm1"));
				OjmService.VoteMenuAction(VoteMenuVO);
			}
			if(!request.getParameter("menu_nm2").isEmpty()) {
				VoteMenuVO.setMenu_nm(request.getParameter("menu_nm2"));
				VoteMenuVO.setMenu_cm(request.getParameter("menu_cm2"));
				OjmService.VoteMenuAction(VoteMenuVO);
			}
			if(!request.getParameter("menu_nm3").isEmpty()) {
				VoteMenuVO.setMenu_nm(request.getParameter("menu_nm3"));
				VoteMenuVO.setMenu_cm(request.getParameter("menu_cm3"));
				OjmService.VoteMenuAction(VoteMenuVO);
			}
			if(!request.getParameter("menu_nm4").isEmpty()) {
				VoteMenuVO.setMenu_nm(request.getParameter("menu_nm4"));
				VoteMenuVO.setMenu_cm(request.getParameter("menu_cm4"));
				OjmService.VoteMenuAction(VoteMenuVO);
			}
			if(!request.getParameter("menu_nm5").isEmpty()) {
				VoteMenuVO.setMenu_nm(request.getParameter("menu_nm5"));
				VoteMenuVO.setMenu_cm(request.getParameter("menu_cm5"));
				OjmService.VoteMenuAction(VoteMenuVO);
			}
		
		
		
		return "redirect:/ojmMain.do";
	}

	@RequestMapping(value = "/ojmLastVote.do")
	public String ojmLastVote(HttpServletRequest request, HttpServletResponse response, MainVO paramVO, Model model)
			throws Exception {
		List<MainVO> voteList = OjmService.getLastVoteList(paramVO);
		model.addAttribute("voteList", voteList);
		return "ojm/ojmLastVote";
	}

	@RequestMapping(value = "/ojmMakeVote.do")
	public String ojmMakeVote(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return "ojm/ojmMakeVote";
	}

	@RequestMapping(value = "/ojmDoVote.do")
	public String ojmDoVote(HttpServletRequest request, HttpServletResponse response, VoteMenuVO MenuList,
			DoVoteVO DoVoteVO, Model model) throws Exception {
		DoVoteVO.setVote_seq(request.getParameter("vote_seq"));
		MenuList.setVote_seq(request.getParameter("vote_seq"));
		DoVoteVO = OjmService.doVoteList(DoVoteVO);
		List<VoteMenuVO> VoteMenu = OjmService.getMenuList(MenuList);
		model.addAttribute("VoteMenu", VoteMenu);
		model.addAttribute("DoVoteVO", DoVoteVO);
		return "ojm/ojmDoVote";
	}

}
