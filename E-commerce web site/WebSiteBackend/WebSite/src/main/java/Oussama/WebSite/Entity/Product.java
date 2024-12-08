package Oussama.WebSite.Entity;

import Oussama.WebSite.dto.ProdDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "Product")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private Long price;
    @Column(name = "description")
    private String description;
    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] image;
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "category_id",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Category category;
    public ProdDto getDto() {
        ProdDto prodDto=new ProdDto();
        prodDto.setId((long) id);
        prodDto.setName(name);
        prodDto.setPrice(price);
        prodDto.setDescription(description);
        prodDto.setByteImg(image);
        prodDto.setCategoryId(Long.valueOf(category.getId()));
        return prodDto;
    }

}
