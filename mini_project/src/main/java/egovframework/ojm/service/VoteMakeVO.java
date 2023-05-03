package egovframework.ojm.service;

public class VoteMakeVO {

	private String vote_seq;
	private String vote_nm;
	private String vote_cm;
	private String user_id;
	private String end_date;
	private String items_num;
	
	
	public String getVote_seq() {
		return vote_seq;
	}
	public void setVote_seq(String vote_seq) {
		this.vote_seq = vote_seq;
	}
	public String getVote_nm() {
		return vote_nm;
	}
	public void setVote_nm(String vote_nm) {
		this.vote_nm = vote_nm;
	}
	public String getVote_cm() {
		return vote_cm;
	}
	public void setVote_cm(String vote_cm) {
		this.vote_cm = vote_cm;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	public String getItems_num() {
		return items_num;
	}
	public void setItems_num(String items_num) {
		this.items_num = items_num;
	}

}
