package com.example.demo.CandidateProfile.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
@Aspect
@Component
public class LoggingandTimingAspect {

    private static final Logger log =
            LoggerFactory.getLogger(LoggingandTimingAspect.class);

    @Around("execution(* com.example.CandidateProfile.service..*(..))")
    public Object logAndTimeServiceMethods(ProceedingJoinPoint joinPoint)
            throws Throwable {

        String methodName = joinPoint.getSignature().toShortString();
        long startTime = System.currentTimeMillis();

        try {
            Object result = joinPoint.proceed();
            long duration = System.currentTimeMillis() - startTime;

            log.info("Method {} executed successfully in {} ms",
                    methodName, duration);

            return result;
        } catch (Exception ex) {
            long duration = System.currentTimeMillis() - startTime;

            log.error("Method {} failed after {} ms",
                    methodName, duration, ex);

            throw ex; 
        }
    }
}
