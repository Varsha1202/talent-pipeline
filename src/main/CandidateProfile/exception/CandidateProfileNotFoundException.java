package com.example.CandidateProfile.exception;

public class CandidateProfileNotFoundException extends RuntimeException{
	public CandidateProfileNotFoundException(Long candidateId) {
		super("Candidate profile not found for id:"+ candidateId);
	}
	
}
