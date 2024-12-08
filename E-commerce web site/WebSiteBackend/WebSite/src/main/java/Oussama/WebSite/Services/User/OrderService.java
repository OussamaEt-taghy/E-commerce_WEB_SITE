package Oussama.WebSite.Services.User;

import Oussama.WebSite.Entity.CartItem;
import Oussama.WebSite.Entity.Enum.OrderStatus;

public interface OrderService {
    void calculateTotalAmount();
    void addItemToCart(CartItem cartItem);
    void removeItemFromCart(CartItem cartItem);
    void updateOrderStatus(OrderStatus newStatus);
}
