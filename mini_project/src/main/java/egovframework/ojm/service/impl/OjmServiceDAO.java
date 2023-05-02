package egovframework.ojm.service.impl;

import java.util.List;


import org.springframework.stereotype.Repository;

import egovframework.ojm.service.DoVoteVO;
import egovframework.ojm.service.LoginVO;
import egovframework.ojm.service.MainVO;
import egovframework.ojm.service.VoteMenuVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("OjmServiceDAO")
public class OjmServiceDAO  extends EgovAbstractDAO{

	public LoginVO loginAction(LoginVO loginVO) throws Exception{
		return (LoginVO) select("OjmServiceDAO.loginAction", loginVO);
	}
	
	public List<MainVO> getVoteList(MainVO paramVO) throws Exception{
		return (List<MainVO>) list("OjmServiceDAO.getVoteList", paramVO);
	}

	public DoVoteVO getDoVoteList(DoVoteVO paramVO) throws Exception{
		return (DoVoteVO) select ("OjmServiceDAO.getDoVoteList", paramVO);
	}
	
	public List<VoteMenuVO> getMenuList(VoteMenuVO paramVO) throws Exception{
		return (List<VoteMenuVO>) list("OjmServiceDAO.getMenuList", paramVO);
	}
	
	public List<MainVO> getLastVoteList(MainVO paramVO) throws Exception{
		return (List<MainVO>) list("OjmServiceDAO.getLastVoteList", paramVO);
	}
	
}
