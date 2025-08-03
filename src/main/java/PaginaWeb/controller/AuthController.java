package PaginaWeb.controller;

import PaginaWeb.model.User;
import PaginaWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Ajusta esto según tu frontend
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestParam String username,
                         @RequestParam String password,
                         @RequestParam(defaultValue = "ROLE_USER") String role) {
        return userService.registerUser(username, password, role);
    }
}