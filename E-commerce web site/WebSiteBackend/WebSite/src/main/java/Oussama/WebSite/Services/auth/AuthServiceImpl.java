package Oussama.WebSite.Services.auth;

import Oussama.WebSite.Entity.Enum.OrderStatus;
import Oussama.WebSite.Entity.Enum.UserRole;
import Oussama.WebSite.Entity.Order;
import Oussama.WebSite.Entity.User;
import Oussama.WebSite.Repository.OrderRepository;
import Oussama.WebSite.Repository.UserRepository;
import Oussama.WebSite.dto.SignUpRequest;
import Oussama.WebSite.dto.UserDto;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService{
@Autowired
    private UserRepository userRepository;
@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
@Autowired
    private OrderRepository orderRepository;

    public UserDto createUser(SignUpRequest signUpRequest) {
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setName(signUpRequest.getName());
        user.setPassword(new BCryptPasswordEncoder().encode(signUpRequest.getPassword()));
        user.setRole(UserRole.User);
        User createdUser = userRepository.save(user);
        Order order = new Order();
        order.setAmount (0L);
        order.setTotalAmount (0L);
        order.setDiscount (0L);
        order.setUser(createdUser);
        order.setOrderStatus(OrderStatus.Pending);
        orderRepository.save(order);
        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());
        return userDto;
    }

    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
    @PostConstruct

    public void createAdminAccount() {
        User adminAccount =userRepository.findByRole(UserRole.ADMIN);
        if(null==adminAccount){
            User user =new User();
            user.setEmail("adminElectro@gmail.com");
            user.setName("Oussama");
            user.setRole(UserRole.ADMIN);
            user.setPassword(new BCryptPasswordEncoder().encode("admin2002"));
            userRepository.save(user);
        }
    }
    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setEmail(user.getEmail());
        userDto.setName(user.getName());
        userDto.setRole(user.getRole());

        return userDto;
    }
    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }


}
