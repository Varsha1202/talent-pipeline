package com.example.CandidateProfile.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(CandidateProfileNotFoundException.class)
  public ResponseEntity<ErrorResponse> handleNotFound(CandidateProfileNotFoundException ex){
	   return ResponseEntity.status(HttpStatus.NOT_FOUND)
			   .body(new ErrorResponse("CANDIDATE_PROFILE_NOT_FOUND",ex.getMessage()));
  }
	
	@ExceptionHandler(CandidateProfileAlreadyExistsException .class)
	public ResponseEntity<ErrorResponse>handleAlreadyExists(
			CandidateProfileAlreadyExistsException ex){
		return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse("CANDIDATE_PROFILE_ALREADY_EXISTS", ex.getMessage()));
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handleGeneric(Exception ex){
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse("INTERNAL_SERVER_ERROR", "Something went wrong. Please try again"));
	}
}
