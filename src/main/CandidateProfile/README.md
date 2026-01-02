# Candidate Profile Service

## Overview
The Candidate Profile Service is a standalone microservice responsible for managing
Candidate professional profile data within the TalentPipeline platform.

This service owns and manages candidate-specific information such as resumes,
skills, experience, and portfolio links.

## Why This Service Exists
The Auth Service handles candidate identity and authentication.
This service exists separately to ensure that professional profile data can evolve
independently of authentication, hiring workflows, and application pipelines.

This separation enforces clean boundaries and reduces coupling across the system.

## Responsibilities
- Create candidate profiles after identity creation
- Update candidate professional information
- Fetch candidate profile details by candidate ID

## Data Ownership
This service is the single source of truth for the following table:
- `candidates`

No other service is allowed to modify or directly access this data.

## What This Service Does NOT Do
- Does not manage authentication or authorization
- Does not handle job applications
- Does not track application status or pipeline stages
- Does not store recruiter or job-related data

## Communication Model
Other services may reference candidates using `candidateId` only.
There are no foreign keys or shared database tables across services.

## Failure Impact
If this service is unavailable:
- Candidate profile viewing and updates are unavailable
- Authentication, job posting, applications, and pipeline workflows continue to function

This ensures the platform's graceful degradation.
