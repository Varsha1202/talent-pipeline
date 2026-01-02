package com.example.CandidateProfile.service.impl;

import org.springframework.stereotype.Service;

import com.example.CandidateProfile.Candidate;
import com.example.CandidateProfile.dto.CandidateProfileResponse;
import com.example.CandidateProfile.dto.CreateCandidateProfileRequest;
import com.example.CandidateProfile.dto.UpdateCandidateProfileRequest;
import com.example.CandidateProfile.repository.CandidateRepository;
import com.example.CandidateProfile.service.CandidateProfileService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CandidateProfileServiceImpl implements CandidateProfileService {

    private final CandidateRepository candidateRepository;

    public CandidateProfileServiceImpl(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @Override
    public CandidateProfileResponse createProfile(CreateCandidateProfileRequest request) {

        if (candidateRepository.existsById(request.getCandidateId())) {
            throw new IllegalStateException("Candidate profile already exists");
        }

        Candidate candidate = new Candidate(
                request.getCandidateId(),
                request.getResumeUrl(),
                request.getExperienceYears(),
                request.getEducation(),
                request.getSkills(),
                request.getPortfolioLink()
        );

        Candidate savedCandidate = candidateRepository.save(candidate);

        return mapToResponse(savedCandidate);
    }

    @Override
  //  @Transactional(readOnly = true)
    public CandidateProfileResponse getProfileByCandidateId(Long candidateId) {

        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Candidate profile not found")
                );

        return mapToResponse(candidate);
    }

    @Override
    public CandidateProfileResponse updateProfile(
            Long candidateId,
            UpdateCandidateProfileRequest request
    ) {

        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() ->
                        new IllegalArgumentException("Candidate profile not found")
                );

        Candidate updatedCandidate = new Candidate(
                candidate.getCandidateId(),
                request.getResumeUrl(),
                request.getExperienceYears(),
                request.getEducation(),
                request.getSkills(),
                request.getPortfolioLink()
        );

        Candidate savedCandidate = candidateRepository.save(updatedCandidate);

        return mapToResponse(savedCandidate);
    }

    private CandidateProfileResponse mapToResponse(Candidate candidate) {
        return new CandidateProfileResponse(
                candidate.getCandidateId(),
                candidate.getResumeUrl(),
                candidate.getExperienceYears(),
                candidate.getEducation(),
                candidate.getSkills(),
                candidate.getPortfolioLink()
        );
    }
}
