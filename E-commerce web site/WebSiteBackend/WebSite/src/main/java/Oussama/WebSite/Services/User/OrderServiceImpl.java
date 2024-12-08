package Oussama.WebSite.Services.User;

import Oussama.WebSite.Entity.CartItem;
import Oussama.WebSite.Entity.Enum.OrderStatus;
import Oussama.WebSite.Repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
private final OrderRepository orderRepository;

    @Override
    public void calculateTotalAmount() {

    }

    @Override
    public void addItemToCart(CartItem cartItem) {

    }

    @Override
    public void removeItemFromCart(CartItem cartItem) {

    }

    @Override
    public void updateOrderStatus(OrderStatus newStatus) {

    }
}
