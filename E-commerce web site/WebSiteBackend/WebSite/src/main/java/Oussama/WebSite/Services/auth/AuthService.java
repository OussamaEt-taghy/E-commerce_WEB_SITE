package Oussama.WebSite.Services.auth;

import Oussama.WebSite.dto.SignUpRequest;
import Oussama.WebSite.dto.UserDto;

import java.util.List;

public interface AuthService {
    UserDto createUser(SignUpRequest signUpRequest);

    boolean hasUserWithEmail(String email);

    List<UserDto> getAllUsers();
    void deleteUser(Long id);
}
