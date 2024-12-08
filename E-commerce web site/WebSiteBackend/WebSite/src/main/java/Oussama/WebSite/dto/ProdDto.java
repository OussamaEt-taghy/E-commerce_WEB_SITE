package Oussama.WebSite.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
@Data
public class ProdDto {

    private Long id;

    private String name;

    private Long price;

    private String description;

    private byte[] byteImg;

    private Long categoryId;
    private String categoryname;

    private MultipartFile img;
}
