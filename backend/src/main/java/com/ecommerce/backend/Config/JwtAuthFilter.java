package com.ecommerce.backend.Config;


import com.ecommerce.backend.Service.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Component
//Each HTTP request coming to backend will be intercepted by this filter
public class JwtAuthFilter extends OncePerRequestFilter {

    private final UserService userDetailsService;

    private final JwtUtils jwtUtils;

    public JwtAuthFilter(UserService userDetailsService, JwtUtils jwtUtils) {
        this.userDetailsService = userDetailsService;
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        //Obtain the Authorization header containing the JWT token
        final String authHeader = request.getHeader(AUTHORIZATION);
        final String userName;
        final String jwtToken;

        //Check if the authHeader exists, if yes check is it starts with bearer token (if not don't do anything just execute the rest)
        if (authHeader == null | !authHeader.startsWith("Bearer")) {
            filterChain.doFilter(request, response);
            return;
        }
        //If it starts with the bearer token => retrieve token from authHeader (start fr position 7 since len(bearer) = 6
        jwtToken = authHeader.substring(7);
        userName = jwtUtils.extractUsername(jwtToken); // to be implemented
        // Check that there is no authentication in SecurityContext
        if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            //Load user details using userDetailsService for authentication
            UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
            final boolean isTokenValid;

            //Validate the extracted JWT token and authenticate the user
            if (jwtUtils.isTokenValid(jwtToken, userDetails)) {
                //construct an authentication token to represent the authenticated user
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,
                        null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                //Store the authenticated user's information in the security context.
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        //Whether authentication was performed or not, it proceeds to pass the request and response objects to the next filter in the chain
        filterChain.doFilter(request, response);
    }
}

//Purpose: The JwtAuthFilter class serves to intercept incoming requests, extract JWT tokens from the Authorization
// header, and attempt to authenticate users based on those tokens.