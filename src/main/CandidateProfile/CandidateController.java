
package com.example.CandidateProfile.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.CandidateProfile.dto.CandidateProfileResponse;
import com.example.CandidateProfile.dto.CreateCandidateProfileRequest;
import com.example.CandidateProfile.dto.UpdateCandidateProfileRequest;
import com.example.CandidateProfile.service.CandidateProfileService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/candidates")
public class CandidateProfileController {

    private final CandidateProfileService candidateProfileService;

    public CandidateProfileController(CandidateProfileService candidateProfileService) {
        this.candidateProfileService = candidateProfileService;
    }

    @PostMapping
    public ResponseEntity<CandidateProfileResponse> createProfile(
            @Valid @RequestBody CreateCandidateProfileRequest request
    ) {
        CandidateProfileResponse response =
                candidateProfileService.createProfile(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{candidateId}")
    public ResponseEntity<CandidateProfileResponse> getProfile(
            @PathVariable Long candidateId
    ) {
        CandidateProfileResponse response =
                candidateProfileService.getProfileByCandidateId(candidateId);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{candidateId}")
    public ResponseEntity<CandidateProfileResponse> updateProfile(
            @PathVariable Long candidateId,
            @Valid @RequestBody UpdateCandidateProfileRequest request
    ) {
        CandidateProfileResponse response =
                candidateProfileService.updateProfile(candidateId, request);

        return ResponseEntity.ok(response);
    }
}
