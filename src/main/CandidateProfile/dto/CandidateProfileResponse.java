package com.example.demo.CandidateProfile.dto;


public class CandidateProfileResponse {

    private Long candidateId;
    private String resumeUrl;
    private Double experienceYears;
    private String education;
    private String skills;
    private String portfolioLink;

    public CandidateProfileResponse(
            Long candidateId,
            String resumeUrl,
            Double experienceYears,
            String education,
            String skills,
            String portfolioLink
    ) {
        this.candidateId = candidateId;
        this.resumeUrl = resumeUrl;
        this.experienceYears = experienceYears;
        this.education = education;
        this.skills = skills;
        this.portfolioLink = portfolioLink;
    }

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
