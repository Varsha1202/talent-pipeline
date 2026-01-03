package com.example.CandidateProfile.exception;

public class CandidateProfileAlreadyExistsException extends RuntimeException {

    public CandidateProfileAlreadyExistsException(Long candidateId) {
        super("Candidate profile already exists for id: " + candidateId);
    }
}
