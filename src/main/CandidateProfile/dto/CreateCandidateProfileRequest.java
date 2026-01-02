package com.example.CandidateProfile.dto;


public class CreateCandidateProfileRequest {

    
    private Long candidateId;

    
    private String resumeUrl;

    private Double experienceYears;

    private String education;

    private String skills;

    
    private String portfolioLink;

    // getters
    public Long getCandidateId() {
        return candidateId;
    }

    public String getResumeUrl() {
        return resumeUrl;
    }

    public Double getExperienceYears() {
        return experienceYears;
    }

    public String getEducation() {
        return education;
    }

    public String getSkills() {
        return skills;
    }

    public String getPortfolioLink() {
        return portfolioLink;
    }
}

