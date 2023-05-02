package egovframework.ojm.service.impl;

import java.util.List;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.ojm.service.DoVoteVO;
import egovframework.ojm.service.LoginVO;
import egovframework.ojm.service.MainVO;
import egovframework.ojm.service.OjmService;
import egovframework.ojm.service.VoteMenuVO;

@Service(value = "OjmService")
public class OjmServiceImpl implements OjmService {

	@Resource(name = "OjmServiceDAO")
	OjmServiceDAO OjmServiceDAO;
	
	@Override
	public LoginVO loginAction(LoginVO loginVO) throws Exception {
		return OjmServiceDAO.loginAction(loginVO);
	}
	
	@Override
	public List<MainVO> getVoteList(MainVO paramVO) throws Exception {
		return OjmServiceDAO.getVoteList(paramVO);
	}
	
	@Override
	public DoVoteVO doVoteList(DoVoteVO paramVO) throws Exception {
		return OjmServiceDAO.getDoVoteList(paramVO);
	}
	
	@Override
	public List<VoteMenuVO> getMenuList(VoteMenuVO paramVO) throws Exception {
		return OjmServiceDAO.getMenuList(paramVO);
	}
	
	@Override
	public List<MainVO> getLastVoteList(MainVO paramVO) throws Exception {
		return OjmServiceDAO.getLastVoteList(paramVO);
	}
}
