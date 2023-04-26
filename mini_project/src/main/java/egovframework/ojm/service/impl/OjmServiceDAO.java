package egovframework.ojm.service.impl;

import java.util.List;


import org.springframework.stereotype.Repository;

import egovframework.ojm.service.LoginVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("OjmServiceDAO")
public class OjmServiceDAO  extends EgovAbstractDAO{

	public LoginVO loginAction(LoginVO loginVO) throws Exception{
		return (LoginVO) select("OjmServiceDAO.loginAction", loginVO);
	}
	
	
}
