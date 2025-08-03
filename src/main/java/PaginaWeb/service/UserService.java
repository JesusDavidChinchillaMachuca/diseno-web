package PaginaWeb.service;

import PaginaWeb.model.Role;
import PaginaWeb.model.User;
import PaginaWeb.repository.RoleRepository;
import PaginaWeb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(String username, String password, String roleName) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("El usuario ya existe.");
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setEnabled(true);

        // Corrección aquí ↓↓↓
        Optional<Role> roleOpt = roleRepository.findByName(roleName);
        Role role;
        if (roleOpt.isPresent()) {
            role = roleOpt.get();
        } else {
            role = new Role();
            role.setName(roleName);
            role = roleRepository.save(role);
        }

        user.setRoles(new HashSet<>());
        user.addRole(role);

        return userRepository.save(user);
    }
}