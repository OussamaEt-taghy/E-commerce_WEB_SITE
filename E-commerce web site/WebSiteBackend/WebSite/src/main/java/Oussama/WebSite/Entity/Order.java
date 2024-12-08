package Oussama.WebSite.Entity;

import Oussama.WebSite.Entity.Enum.OrderStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "orders")
public class Order implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String orderDescription;
    private Date date;
    private Long amount;
    private  String address;
    private OrderStatus orderStatus;
    private Long totalAmount;
    private Long discount;//la remise
    @OneToOne (cascade=CascadeType.MERGE)
    @JoinColumn(name="user_id",referencedColumnName ="id")
    private User user ;
    @OneToMany (fetch = FetchType.LAZY, mappedBy = "order")
    private List<CartItem> cartItems;
}
