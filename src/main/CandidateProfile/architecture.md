# Candidate Profile Service – Architecture

## Service Boundary
The Candidate Profile Service is responsible exclusively for managing
Candidate professional profile data.

It does not participate in hiring workflows, job management, or authentication.

## Owned Data
This service owns the following table:

### candidates
- candidate_id (PK)
- resume_url
- experience_years
- education
- skills
- portfolio_link
- created_at
- updated_at

No other service may read or write this table directly.

## API Responsibilities
- Accept profile creation requests
- Serve candidate profile data
- Handle profile updates

All APIs are DTO-based.
Entities are never exposed outside the service boundary.

## Interaction With Other Services
- Receives `candidateId` from the Auth Service during profile creation
- Other services may store `candidateId` for reference only
- No synchronous service-to-service calls are required

## Failure Scenarios
| Scenario | Impact |
|-------|--------|
Service down | Profile data unavailable |
Auth Service down | Profile service remains functional |
Job/Application services down | No impact |

## Architectural Principles Applied
- Single source of truth
- No shared databases
- No cross-service foreign keys
- DTO-based API contracts
- Centralized exception handling
- AOP-based observability
