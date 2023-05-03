package egovframework.ojm.service;

import java.util.List;

public interface OjmService {

	public LoginVO loginAction(LoginVO loginVO) throws Exception;
	
	public List<MainVO> getVoteList(MainVO paramVO) throws Exception;
	
	public DoVoteVO doVoteList(DoVoteVO paramVO) throws Exception;
	
	public List<VoteMenuVO> getMenuList(VoteMenuVO paramVO) throws Exception;
	
	public List<MainVO> getLastVoteList(MainVO paramVO) throws Exception;
	
	public VoteMakeVO MakeVoteAction(VoteMakeVO paramVO) throws Exception;
	
	public VoteMenuVO VoteMenuAction(VoteMenuVO paramVO) throws Exception;
}
